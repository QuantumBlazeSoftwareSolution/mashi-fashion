import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: 'Where is Mashi Fashion located in Sri Lanka?',
      a: 'Our boutique atelier is located at Ruwanwalla Rd, Urapola, Sri Lanka, 11126. You can visit us for custom measurements, fittings, and to browse our collections.'
    },
    {
      q: 'What is the pricing for custom tailoring?',
      a: 'Pricing depends on fabric type, design complexity, and fittings. Custom simple dresses start from LKR 10,000, while premium evening gowns and bridal couture vary. You can request a quote online.'
    },
    {
      q: 'How long does a custom dress order take?',
      a: 'Typically, it takes 3 to 6 weeks. This includes the initial styling consultation, fabric sourcing, pattern drafting, fitting sessions, and final adjustments.'
    },
    {
      q: 'Do you offer custom alterations for rental wedding gowns?',
      a: 'Yes! Standard fitting adjustments (bust, waist, hemline length) are included in the wedding dress rental fee at no extra cost, ensuring a perfect fit.'
    },
    {
      q: 'Can we order school uniforms in bulk?',
      a: 'Absolutely. We accommodate individual tailoring as well as bulk orders for girls school uniforms. Contact us to discuss bulk pricing discounts and schedules.'
    },
    {
      q: 'How do I pay and secure my booking?',
      a: 'We accept bank transfers, credit/debit cards, and cash payments at our Urapola boutique. A deposit is required to confirm custom dress tailoring or wedding gown rentals.'
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative animate-fade-in-up" id="faq-page-container">
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Common Queries Regarding Tailoring, Gown Rentals & Custom Orders"
      />

      <section className="py-20 px-4 bg-brand-ivory" id="faq-accordions-section">
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-lg border border-brand-gold/15 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 text-left font-display font-semibold text-brand-maroon hover:bg-brand-blush/35 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base">{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-brand-gold flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-brand-gold flex-shrink-0" />
                  )}
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-[300px] border-t border-brand-gold/10' : 'max-h-0'
                  }`}
                >
                  <p className="p-5 text-sm text-brand-charcoal/80 leading-relaxed bg-brand-blush/10">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
