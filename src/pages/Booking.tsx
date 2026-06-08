import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { Calendar, Clock, User, Phone, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceType: 'Bridal Gown Fitting',
    date: '',
    timeSlot: '10:00 AM - 11:30 AM',
    notes: ''
  });
  const [booked, setBooked] = useState(false);

  const timeSlots = [
    '09:00 AM - 10:30 AM',
    '10:30 AM - 12:00 PM',
    '01:30 PM - 03:00 PM',
    '03:00 PM - 04:30 PM',
    '04:30 PM - 06:00 PM'
  ];

  const services = [
    'Bridal Gown Fitting',
    'Custom Dress Consultation',
    'School Uniform Measurements',
    'General Fashion Alterations'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    setBooked(true);
  };

  const handleWhatsAppBooking = () => {
    const waPhone = '94711612290'; // Urapola Atelier Number
    const message = `*Mashi Fashion - Appointment Booking Request*
-----------------------------
*Client Name:* ${formData.name}
*Phone:* ${formData.phone}
*Service Type:* ${formData.serviceType}
*Preferred Date:* ${formData.date}
*Time Slot:* ${formData.timeSlot}
*Notes:* ${formData.notes || 'None'}
-----------------------------
Please confirm if this slot is available.`;

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/${waPhone}?text=${encodedMessage}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div className="relative animate-fade-in-up" id="booking-page-container">
      <PageHeader
        title="Book Appointment"
        subtitle="Schedule Your Fitting or Design Consultation in Urapola"
      />

      <section className="py-20 px-4 bg-brand-ivory" id="booking-form-section">
        <div className="max-w-xl mx-auto bg-white border border-brand-gold/20 rounded-2xl shadow-xl p-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-brand-gold"></div>

          {booked ? (
            <div className="text-center py-10 space-y-6 animate-fade-in-up">
              <div className="p-4 bg-brand-blush/60 rounded-full inline-block">
                <CheckCircle2 className="w-16 h-16 text-brand-gold" />
              </div>
              <h2 className="font-display text-2xl font-bold text-brand-maroon">
                Appointment Requested!
              </h2>
              <p className="text-sm text-brand-charcoal/80 leading-relaxed max-w-sm mx-auto">
                Hi {formData.name}, we have received your booking request for {formData.date} at {formData.timeSlot}. To finalize the booking instantly, click below to confirm via WhatsApp.
              </p>
              <div className="pt-4 flex flex-col gap-3">
                <button
                  onClick={handleWhatsAppBooking}
                  className="bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold py-3.5 px-6 rounded-md transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 1.977 14.053.953 11.432.953c-5.44 0-9.866 4.372-9.87 9.802 0 1.764.476 3.49 1.38 5.02L1.993 21.8l6.197-1.619" />
                  </svg>
                  Confirm Reservation on WhatsApp
                </button>
                <button
                  onClick={() => {
                    setBooked(false);
                    setFormData({
                      name: '',
                      phone: '',
                      serviceType: 'Bridal Gown Fitting',
                      date: '',
                      timeSlot: '10:00 AM - 11:30 AM',
                      notes: ''
                    });
                  }}
                  className="text-xs text-brand-maroon hover:underline font-semibold"
                >
                  Book Another Appointment
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleBook} className="space-y-5">
              
              <div className="space-y-1">
                <h3 className="font-display text-xl font-bold text-brand-maroon">
                  Schedule a Visit
                </h3>
                <p className="text-xs text-brand-charcoal/60">
                  Select your slot and complete the form.
                </p>
              </div>

              {/* Service Selection */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-brand-charcoal">
                  Service Type
                </label>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full bg-brand-ivory border border-brand-gold/30 rounded-md py-2.5 px-3 focus:outline-none focus:border-brand-maroon text-sm text-brand-charcoal"
                >
                  {services.map((srv, idx) => (
                    <option key={idx} value={srv}>{srv}</option>
                  ))}
                </select>
              </div>

              {/* Date Input */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-brand-charcoal flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-brand-gold" />
                  Appointment Date
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

              {/* Time Slots */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-brand-charcoal flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-brand-gold" />
                  Time Slot
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {timeSlots.map((slot, i) => (
                    <label
                      key={i}
                      className={`border rounded-lg p-2.5 text-xs text-center cursor-pointer transition-all ${
                        formData.timeSlot === slot
                          ? 'bg-brand-maroon border-brand-maroon text-white font-semibold'
                          : 'bg-brand-ivory border-brand-gold/25 hover:border-brand-maroon text-brand-charcoal'
                      }`}
                    >
                      <input
                        type="radio"
                        name="timeSlot"
                        value={slot}
                        checked={formData.timeSlot === slot}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      {slot}
                    </label>
                  ))}
                </div>
              </div>

              {/* Client Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-brand-charcoal flex items-center gap-1.5">
                    <User className="w-4 h-4 text-brand-gold" />
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full bg-brand-ivory border border-brand-gold/30 rounded-md py-2.5 px-3 focus:outline-none focus:border-brand-maroon text-sm text-brand-charcoal placeholder-brand-charcoal/40"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-brand-charcoal flex items-center gap-1.5">
                    <Phone className="w-4 h-4 text-brand-gold" />
                    WhatsApp Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="071 161 2290"
                    className="w-full bg-brand-ivory border border-brand-gold/30 rounded-md py-2.5 px-3 focus:outline-none focus:border-brand-maroon text-sm text-brand-charcoal placeholder-brand-charcoal/40"
                  />
                </div>
              </div>

              {/* Notes */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-brand-charcoal">
                  Notes or Styling Requests (Optional)
                </label>
                <textarea
                  name="notes"
                  rows={2}
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Specify custom requirements..."
                  className="w-full bg-brand-ivory border border-brand-gold/30 rounded-md py-2.5 px-3 focus:outline-none focus:border-brand-maroon text-sm text-brand-charcoal placeholder-brand-charcoal/40"
                ></textarea>
              </div>

              {/* Book Button */}
              <button
                type="submit"
                className="w-full bg-brand-maroon hover:bg-brand-maroon-light text-white font-semibold text-xs tracking-wider uppercase py-3.5 rounded-md transition-all shadow-md shadow-brand-maroon/20 flex items-center justify-center gap-2"
              >
                Request Slot
                <ArrowRight className="w-4 h-4" />
              </button>

            </form>
          )}

        </div>
      </section>
    </div>
  );
}
