import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import { Sparkles, HelpCircle } from 'lucide-react';

export default function WeddingRentals() {
  const rentalBenefits = [
    {
      title: 'Premium Quality Gowns',
      desc: 'Selected collection of high-end bridal dresses, white lace gowns, and modern wedding silhouettes.'
    },
    {
      title: 'Complimentary Custom Alterations',
      desc: 'Mashi personally alters the rental dress to match your body measurements, so you look flawless on your day.'
    },
    {
      title: 'Hassle-Free Cleaning',
      desc: 'Professional eco-friendly dry-cleaning is fully managed by our atelier before and after the rental period.'
    },
    {
      title: 'Flexible Rental Periods',
      desc: 'Standard rental lasts 3 to 5 days, covering the wedding ceremony, pre-shoot, and return, without stress.'
    }
  ];

  const rentalFaqs = [
    {
      q: 'How far in advance should I book my rental?',
      a: 'We recommend booking 2 to 4 months before your wedding date to ensure your chosen dress is reserved and custom-fitted in time.'
    },
    {
      q: 'Are alterations included in the rental price?',
      a: 'Yes! Basic fitting alterations (adjusting the waist, bust, or hemline) are fully included to ensure the gown fits you perfectly.'
    },
    {
      q: 'What happens if the dress gets slightly damaged?',
      a: 'We understand minor wear happens (e.g., small dirt marks on the train, loose beads). Normal wear and tear is covered. Significant tears or permanent stains may incur repair charges.'
    }
  ];

  return (
    <div className="relative animate-fade-in-up" id="wedding-rentals-service-page">
      <PageHeader
        title="Wedding Dress Rentals"
        subtitle="Stunning Luxury Bridal Gowns for Your Special Day"
      />

      {/* Main Info Section */}
      <section className="py-24 px-4 bg-brand-ivory">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Service Image Column */}
          <div className="lg:col-span-6 relative">
            <div className="absolute inset-0 border-2 border-brand-gold rounded-lg translate-x-4 translate-y-4 pointer-events-none"></div>
            <div className="relative rounded-lg overflow-hidden bg-brand-maroon shadow-xl h-[480px]">
              <img
                src="/assets/bridal_rentals.png"
                alt="Premium bridal wedding dress rental boutique showcase"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Service Details Column */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-display text-3xl font-bold text-brand-maroon">
              Rent Your Dream Gown without the Designer Price Tag
            </h2>
            <div className="h-0.5 w-16 bg-brand-gold"></div>
            <p className="font-sans text-brand-charcoal/80 leading-relaxed">
              Your wedding day is one of the most memorable moments of your life. At Mashi Fashion, we believe every bride deserves to wear a premium designer dress without the massive cost of purchasing. 
            </p>
            <p className="font-sans text-brand-charcoal/80 leading-relaxed">
              Our luxury Wedding Dress Rental Service offers a handpicked collection of exquisite gowns—from classic ballgowns to elegant A-lines and sleek modern drapes. All rentals include complimentary fittings to make sure you look stunning.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch gap-4">
              <Link
                to="/booking"
                className="bg-brand-maroon hover:bg-brand-maroon-light text-white font-semibold text-xs tracking-wider uppercase py-3.5 px-6 rounded-md text-center transition-all duration-300 shadow-md shadow-brand-maroon/20"
              >
                Book Gown Fitting
              </Link>
              <Link
                to="/quote"
                className="bg-transparent border border-brand-maroon text-brand-maroon hover:bg-brand-maroon hover:text-white font-semibold text-xs tracking-wider uppercase py-3.5 px-6 rounded-md text-center transition-all duration-300"
              >
                Inquire Rates
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Gown Rental Benefits */}
      <section className="py-24 px-4 bg-white border-t border-brand-gold/15">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-brand-maroon">
              Why Choose Our Rentals?
            </h2>
            <div className="h-0.5 w-24 bg-brand-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rentalBenefits.map((b, i) => (
              <div
                key={i}
                className="bg-brand-blush/40 border border-brand-gold/10 rounded-xl p-8 space-y-3 flex items-start gap-4"
              >
                <div className="p-3.5 bg-brand-maroon rounded-lg text-white mt-1">
                  <Sparkles className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-brand-maroon mb-1">
                    {b.title}
                  </h3>
                  <p className="text-sm text-brand-charcoal/85 leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rental FAQ */}
      <section className="py-24 px-4 bg-brand-ivory border-t border-brand-gold/15">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="font-display text-3xl font-bold text-brand-maroon">
              Rental FAQs
            </h2>
            <div className="h-0.5 w-24 bg-brand-gold mx-auto"></div>
          </div>

          <div className="space-y-6">
            {rentalFaqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-lg p-6 border border-brand-gold/10 shadow-sm space-y-2">
                <h3 className="font-display text-base font-bold text-brand-maroon flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-brand-gold flex-shrink-0" />
                  {faq.q}
                </h3>
                <p className="text-sm text-brand-charcoal/80 leading-relaxed pl-7">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
