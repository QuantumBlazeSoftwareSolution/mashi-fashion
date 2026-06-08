import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { ArrowRight, ArrowLeft, Send, CheckCircle2, X, Mail } from 'lucide-react';

interface QuoteFormData {
  service: string;
  description: string;
  fabric: string;
  budget: string;
  date: string;
  name: string;
  phone: string;
  location: string;
  notes: string;
}

export default function Quote() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [filePreviews, setFilePreviews] = useState<string[]>([]);
  
  const [formData, setFormData] = useState<QuoteFormData>({
    service: 'Custom Gown',
    description: '',
    fabric: 'Silk',
    budget: 'LKR 30,000 - 50,000',
    date: '',
    name: '',
    phone: '',
    location: '',
    notes: ''
  });

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setSelectedFiles(prev => [...prev, ...filesArray]);
      
      const newPreviews = filesArray.map(file => URL.createObjectURL(file));
      setFilePreviews(prev => [...prev, ...newPreviews]);
    }
  };

  const removeFile = (idx: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== idx));
    setFilePreviews(prev => prev.filter((_, i) => i !== idx));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getSummaryMessage = () => {
    const imageNote = selectedFiles.length > 0 
      ? `\n*Reference Images:* Attached ${selectedFiles.length} image(s) from gallery.`
      : '';

    return `*Mashi Fashion - New Quote Request*
-----------------------------
*Client Name:* ${formData.name}
*Phone:* ${formData.phone}
*Location:* ${formData.location}
*Service Selected:* ${formData.service}
*Need Date:* ${formData.date}
*Estimated Budget:* ${formData.budget}
*Fabric Preferred:* ${formData.fabric}
*Details:* ${formData.description}
*Notes:* ${formData.notes || 'None'}${imageNote}
-----------------------------
Please review and send a price quote.`;
  };

  const handleWhatsAppSubmit = () => {
    const waPhone = '94711612290'; // Business WhatsApp hotline
    const message = getSummaryMessage();
    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/${waPhone}?text=${encodedMessage}`;
    window.open(waUrl, '_blank');
  };

  const handleEmailSubmit = () => {
    const emailTo = 'info@mashifashion.lk';
    const subject = `Mashi Fashion - Quote Request from ${formData.name}`;
    const textBody = getSummaryMessage()
      .replace(/\*/g, '') // remove markdown bold stars
      + `\n\n(Note: Please attach your ${selectedFiles.length > 0 ? selectedFiles.length : 'reference'} selected images from your device to this email before hitting send!)`;
    
    const mailtoUrl = `mailto:${emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(textBody)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className="relative animate-fade-in-up" id="quote-page-container">
      <PageHeader
        title="Get A Quote"
        subtitle="Request Custom Tailoring Estimations & Booking Fees"
      />

      <section className="py-20 px-4 bg-brand-ivory" id="quote-flow-form-section">
        <div className="max-w-xl mx-auto bg-white border border-brand-gold/20 rounded-2xl shadow-xl p-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-brand-gold"></div>

          {submitted ? (
            <div className="text-center py-10 space-y-6 animate-fade-in-up">
              <div className="p-4 bg-brand-blush/60 rounded-full inline-block">
                <CheckCircle2 className="w-16 h-16 text-brand-gold" />
              </div>
              <h2 className="font-display text-2xl font-bold text-brand-maroon">
                Details Prepared!
              </h2>
              <div className="text-sm text-brand-charcoal/80 leading-relaxed max-w-sm mx-auto space-y-4">
                <p>
                  Thank you, {formData.name}. To submit your quote details directly to our Urapola atelier without server uploads, choose WhatsApp or Email below.
                </p>
                {selectedFiles.length > 0 && (
                  <div className="bg-brand-blush/60 border border-brand-gold/30 rounded-xl p-4 text-left text-xs text-brand-charcoal space-y-2">
                    <span className="font-bold text-brand-maroon uppercase block tracking-wider">
                      📎 How to Attach Selected Photos:
                    </span>
                    <ol className="list-decimal list-inside space-y-1 leading-relaxed font-sans text-brand-charcoal/90">
                      <li>Choose your preferred contact method below.</li>
                      <li>The text content will draft automatically.</li>
                      <li><strong>Attach the {selectedFiles.length} photo(s) manually</strong> from your device gallery before sending!</li>
                    </ol>
                  </div>
                )}
              </div>
              
              <div className="pt-4 flex flex-col gap-3">
                <button
                  onClick={handleWhatsAppSubmit}
                  className="bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold py-3 px-6 rounded-md transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer w-full text-sm uppercase tracking-wider"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 1.977 14.053.953 11.432.953c-5.44 0-9.866 4.372-9.87 9.802 0 1.764.476 3.49 1.38 5.02L1.993 21.8l6.197-1.619" />
                  </svg>
                  Submit via WhatsApp
                </button>
                
                <button
                  onClick={handleEmailSubmit}
                  className="bg-brand-maroon hover:bg-brand-maroon-light text-white font-semibold py-3 px-6 rounded-md transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer w-full text-sm uppercase tracking-wider"
                >
                  <Mail className="w-5 h-5 text-brand-gold" />
                  Submit via Email
                </button>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setStep(1);
                    setSelectedFiles([]);
                    setFilePreviews([]);
                    setFormData({
                      service: 'Custom Gown',
                      description: '',
                      fabric: 'Silk',
                      budget: 'LKR 30,000 - 50,000',
                      date: '',
                      name: '',
                      phone: '',
                      location: '',
                      notes: ''
                    });
                  }}
                  className="text-xs text-brand-maroon hover:underline font-semibold pt-2"
                >
                  Create Another Request
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Step indicator */}
              <div className="flex items-center justify-between text-xs font-semibold text-brand-gold-dark uppercase tracking-widest pb-4 border-b border-brand-gold/10">
                <span>Step {step} of 4</span>
                <span>
                  {step === 1 ? 'Service type' : step === 2 ? 'Details' : step === 3 ? 'Reference Photos' : 'Contact info'}
                </span>
              </div>

              {/* STEP 1: SERVICE TYPE */}
              {step === 1 && (
                <div className="space-y-4 animate-fade-in-up">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-brand-charcoal">
                      Select Tailoring Service
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-brand-ivory border border-brand-gold/30 rounded-md py-2.5 px-3 focus:outline-none focus:border-brand-maroon text-sm text-brand-charcoal"
                    >
                      <option value="Custom Gown">Custom-Made Dress / Gown</option>
                      <option value="Wedding Rental">Wedding Dress Rental</option>
                      <option value="Saree Jacket">Saree Jacket Tailoring</option>
                      <option value="Lehenga / Bridal Occasion">Going-away / Homecoming / Lehenga</option>
                      <option value="School Uniform">School Uniform (Girls)</option>
                      <option value="Other Fashion">Other Tailoring Services</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-brand-charcoal">
                      Fabric Material Preference
                    </label>
                    <select
                      name="fabric"
                      value={formData.fabric}
                      onChange={handleChange}
                      className="w-full bg-brand-ivory border border-brand-gold/30 rounded-md py-2.5 px-3 focus:outline-none focus:border-brand-maroon text-sm text-brand-charcoal"
                    >
                      <option value="Silk">Luxury Silk (Saree / Dress)</option>
                      <option value="Lace">Chantilly Lace / Bridal Lace</option>
                      <option value="Cotton">Breathable Cotton (Daily / Uniforms)</option>
                      <option value="Satin">Premium Satin / Velvet</option>
                      <option value="Other">Other / Designer fabrics</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-brand-charcoal">
                      Target Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full bg-brand-ivory border border-brand-gold/30 rounded-md py-2.5 px-3 focus:outline-none focus:border-brand-maroon text-sm text-brand-charcoal"
                    >
                      <option value="LKR 10,000 - 30,000">LKR 10,000 - 30,000</option>
                      <option value="LKR 30,000 - 50,000">LKR 30,000 - 50,000</option>
                      <option value="LKR 50,000 - 100,000">LKR 50,000 - 100,000</option>
                      <option value="LKR 100,000+">LKR 100,000+</option>
                    </select>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={nextStep}
                      className="bg-brand-maroon hover:bg-brand-maroon-light text-white font-semibold text-xs tracking-wider uppercase py-3 px-6 rounded-md flex items-center gap-2 cursor-pointer"
                    >
                      Next Details
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: DRESS DETAILS */}
              {step === 2 && (
                <div className="space-y-4 animate-fade-in-up">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-brand-charcoal">
                      Describe the Design (Style, neckline, fittings, etc.)
                    </label>
                    <textarea
                      name="description"
                      required
                      rows={4}
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="E.g., An A-line white bridal gown with long lace sleeves and a sweetheart neck, size medium..."
                      className="w-full bg-brand-ivory border border-brand-gold/30 rounded-md py-2.5 px-3 focus:outline-none focus:border-brand-maroon text-sm text-brand-charcoal placeholder-brand-charcoal/40"
                    ></textarea>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-brand-charcoal">
                      Required Completion Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-brand-ivory border border-brand-gold/30 rounded-md py-2.5 px-3 focus:outline-none focus:border-brand-maroon text-sm text-brand-charcoal"
                    />
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="text-brand-maroon font-semibold text-xs tracking-wider uppercase py-3 px-6 rounded-md flex items-center gap-2 hover:bg-brand-blush cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      className="bg-brand-maroon hover:bg-brand-maroon-light text-white font-semibold text-xs tracking-wider uppercase py-3 px-6 rounded-md flex items-center gap-2 cursor-pointer"
                    >
                      Next Photos
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: REFERENCE IMAGES (OPTIONAL) */}
              {step === 3 && (
                <div className="space-y-4 animate-fade-in-up">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-brand-charcoal">
                      Reference Images (Optional)
                    </label>
                    <p className="text-xs text-brand-charcoal/65 leading-relaxed pb-2">
                      Please select any design reference images from your device. Since we run a serverless boutique to respect privacy, your files will not be uploaded. You will attach them directly to WhatsApp or your email client in the final step.
                    </p>

                    <div className="flex flex-col items-center justify-center border-2 border-dashed border-brand-gold/30 hover:border-brand-maroon rounded-xl p-6 bg-brand-ivory cursor-pointer transition-colors relative group">
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleFileChange}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                      />
                      <svg className="w-10 h-10 text-brand-gold group-hover:text-brand-maroon transition-colors mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-xs font-semibold text-brand-maroon group-hover:underline">
                        {selectedFiles.length > 0 ? `${selectedFiles.length} file(s) selected` : 'Click to select reference photos'}
                      </span>
                    </div>
                  </div>

                  {filePreviews.length > 0 && (
                    <div className="grid grid-cols-3 gap-2 pt-2">
                      {filePreviews.map((url, idx) => (
                        <div key={idx} className="h-20 border border-brand-gold/15 rounded-md overflow-hidden relative">
                          <img src={url} alt="Preview" className="w-full h-full object-cover object-center" />
                          <button
                            type="button"
                            onClick={() => removeFile(idx)}
                            className="absolute top-1 right-1 bg-brand-maroon text-white hover:bg-brand-gold hover:text-brand-maroon-dark rounded-full p-0.5 cursor-pointer transition-colors"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="text-brand-maroon font-semibold text-xs tracking-wider uppercase py-3 px-6 rounded-md flex items-center gap-2 hover:bg-brand-blush cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      className="bg-brand-maroon hover:bg-brand-maroon-light text-white font-semibold text-xs tracking-wider uppercase py-3 px-6 rounded-md flex items-center gap-2 cursor-pointer"
                    >
                      Next Contact
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 4: CONTACT INFO */}
              {step === 4 && (
                <div className="space-y-4 animate-fade-in-up">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-brand-charcoal">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Amali Senanayake"
                      className="w-full bg-brand-ivory border border-brand-gold/30 rounded-md py-2.5 px-3 focus:outline-none focus:border-brand-maroon text-sm text-brand-charcoal placeholder-brand-charcoal/40"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-brand-charcoal">
                      Phone Number (WhatsApp Active)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="077 123 4567"
                      className="w-full bg-brand-ivory border border-brand-gold/30 rounded-md py-2.5 px-3 focus:outline-none focus:border-brand-maroon text-sm text-brand-charcoal placeholder-brand-charcoal/40"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-brand-charcoal">
                      Location / City (in Sri Lanka)
                    </label>
                    <input
                      type="text"
                      name="location"
                      required
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="Colombo 05, Urapola, Ruwanwella, etc."
                      className="w-full bg-brand-ivory border border-brand-gold/30 rounded-md py-2.5 px-3 focus:outline-none focus:border-brand-maroon text-sm text-brand-charcoal placeholder-brand-charcoal/40"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-brand-charcoal">
                      Additional Notes (Optional)
                    </label>
                    <textarea
                      name="notes"
                      rows={2}
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Any specific requests..."
                      className="w-full bg-brand-ivory border border-brand-gold/30 rounded-md py-2.5 px-3 focus:outline-none focus:border-brand-maroon text-sm text-brand-charcoal placeholder-brand-charcoal/40"
                    ></textarea>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="text-brand-maroon font-semibold text-xs tracking-wider uppercase py-3 px-6 rounded-md flex items-center gap-2 hover:bg-brand-blush cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back
                    </button>
                    <button
                      type="submit"
                      className="bg-brand-gold hover:bg-brand-gold-dark text-brand-maroon-dark font-semibold text-xs tracking-wider uppercase py-3.5 px-8 rounded-md flex items-center gap-2 shadow-md cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      Prepare Submission
                    </button>
                  </div>
                </div>
              )}

            </form>
          )}

        </div>
      </section>
    </div>
  );
}
