import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Custom Dress Order',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="relative animate-fade-in-up" id="contact-page-container">
      <PageHeader
        title="Contact Us"
        subtitle="Get in Touch with Mashi Fashion Atelier Urapola"
      />

      <section className="py-20 px-4 bg-brand-ivory" id="contact-content-section">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-8 bg-white border border-brand-gold/15 rounded-2xl p-8 shadow-md">
            <div className="space-y-2">
              <h2 className="font-display text-2xl font-bold text-brand-maroon">
                Atelier Location
              </h2>
              <div className="h-0.5 w-12 bg-brand-gold"></div>
              <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                Visit our fashion showroom to select fabrics, get measured, or try on rental wedding dresses.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-blush/60 border border-brand-gold/20 rounded-lg text-brand-maroon flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-brand-maroon mb-0.5">Address</h3>
                  <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                    Ruwanwalla rd, Urapola, Sri Lanka, 11126
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-blush/60 border border-brand-gold/20 rounded-lg text-brand-maroon flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-brand-maroon mb-0.5">Telephone</h3>
                  <p className="text-sm text-brand-charcoal/80">
                    +94 71 161 2290
                  </p>
                </div>
              </div>



              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-blush/60 border border-brand-gold/20 rounded-lg text-brand-maroon flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-brand-maroon mb-0.5">Atelier Hours</h3>
                  <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                    Tuesday - Sunday: 9:00 AM - 6:00 PM<br />
                    Monday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 bg-white border border-brand-gold/15 rounded-2xl p-8 shadow-md">
            {formSubmitted ? (
              <div className="text-center py-16 space-y-4">
                <div className="p-3 bg-brand-blush/60 rounded-full inline-block">
                  <Mail className="w-12 h-12 text-brand-gold" />
                </div>
                <h3 className="font-display text-2xl font-bold text-brand-maroon">
                  Message Sent Successfully!
                </h3>
                <p className="text-sm text-brand-charcoal/85 max-w-sm mx-auto">
                  Thank you for contacting Mashi Fashion. We will review your message and reach out to you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: '', email: '', subject: 'Custom Dress Order', message: '' });
                  }}
                  className="text-sm font-semibold text-brand-maroon hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                  <h2 className="font-display text-2xl font-bold text-brand-maroon">
                    Send Us a Message
                  </h2>
                  <div className="h-0.5 w-12 bg-brand-gold"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-brand-charcoal">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name"
                      className="w-full bg-brand-ivory border border-brand-gold/30 rounded-md py-2.5 px-3 focus:outline-none focus:border-brand-maroon text-sm text-brand-charcoal"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-brand-charcoal">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      className="w-full bg-brand-ivory border border-brand-gold/30 rounded-md py-2.5 px-3 focus:outline-none focus:border-brand-maroon text-sm text-brand-charcoal"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-brand-charcoal">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-brand-ivory border border-brand-gold/30 rounded-md py-2.5 px-3 focus:outline-none focus:border-brand-maroon text-sm text-brand-charcoal"
                  >
                    <option value="Custom Dress Order">Custom Dress / Tailoring Inquiry</option>
                    <option value="Wedding Rental Quote">Wedding Dress Rental Quote</option>
                    <option value="School Uniform Order">School Uniform Order</option>
                    <option value="General Question">General Question</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-brand-charcoal">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="w-full bg-brand-ivory border border-brand-gold/30 rounded-md py-2.5 px-3 focus:outline-none focus:border-brand-maroon text-sm text-brand-charcoal"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-brand-maroon hover:bg-brand-maroon-light text-white font-semibold text-xs tracking-wider uppercase py-3.5 px-8 rounded-md transition-all shadow-md shadow-brand-maroon/20 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* Embedded Location Map */}
      <section className="py-8 px-4 bg-brand-ivory border-t border-brand-gold/15" id="maps-embed-section">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white border border-brand-gold/15 rounded-2xl overflow-hidden shadow-lg h-[450px] relative">
            {/* Google Map Iframe for Urapola Sri Lanka */}
            <iframe
              title="Mashi Fashion Urapola Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15833.568461421034!2d80.116!3d7.086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2fb3e7e2c9431%3A0xaad61a5c68b6cf54!2sUrapola!5e0!3m2!1sen!2slk!4v1717820000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

    </div>
  );
}
