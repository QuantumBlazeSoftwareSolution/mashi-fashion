import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import { Sparkles } from 'lucide-react';

export default function OtherServices() {
  const otherItems = [
    {
      title: 'Bridesmaids & Maid of Honor Gowns',
      desc: 'Elegant matching bridesmaids dress collections tailored in harmonious color schemes and styles for the bridal party.'
    },
    {
      title: 'Kids & Toddler Custom Wear',
      desc: 'Comfortable, cute custom party frocks, birthday outfits, and page boy suits for your little ones.'
    },
    {
      title: 'Corporate Tailoring',
      desc: 'Smart, sharp corporate dresses, pantsuits, blazers, and skirts customized for professional workplaces.'
    },
    {
      title: 'Styling Consultation',
      desc: 'Personal color styling analysis, wardrobe edits, and designer advices by Mashi to help you look your absolute best.'
    }
  ];

  return (
    <div className="relative animate-fade-in-up" id="other-services-page">
      <PageHeader
        title="Other Fashion Services"
        subtitle="A Range of Fine Tailoring and Styling Solutions"
      />

      {/* Main Info Section */}
      <section className="py-24 px-4 bg-brand-ivory">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-display text-3xl font-bold text-brand-maroon">
              Bespoke Apparel for Every Moment in Life
            </h2>
            <div className="h-0.5 w-16 bg-brand-gold"></div>
            
            <p className="font-sans text-brand-charcoal/80 leading-relaxed">
              In addition to custom gowns, wedding dress rentals, and school uniforms, Mashi Fashion offers dedicated tailoring support for bridesmaids, children, corporate teams, and daily elegant wear.
            </p>
            <p className="font-sans text-brand-charcoal/80 leading-relaxed">
              We focus on premium fits, selecting breathable materials suited to Sri Lanka's climate, and working together to finalize details. Let us transform your design draft or reference photo into a beautiful dress.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch gap-4">
              <Link
                to="/booking"
                className="bg-brand-maroon hover:bg-brand-maroon-light text-white font-semibold text-xs tracking-wider uppercase py-3.5 px-6 rounded-md text-center transition-all duration-300 shadow-md shadow-brand-maroon/20"
              >
                Schedule Consultation
              </Link>
              <a
                href="https://wa.me/94711612290?text=Hi%20Mashi!%20I%20have%20a%20special%20tailoring%20request%20for%20other%20dresses."
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white font-semibold text-xs tracking-wider uppercase py-3.5 px-6 rounded-md text-center transition-all duration-300 flex items-center justify-center gap-2"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Service Image Column */}
          <div className="lg:col-span-6 relative">
            <div className="absolute inset-0 border-2 border-brand-gold rounded-lg translate-x-4 translate-y-4 pointer-events-none"></div>
            <div className="relative rounded-lg overflow-hidden bg-brand-maroon shadow-xl h-[450px]">
              <img
                src="/assets/casual_wear.png"
                alt="Elegant modern dress on dress form mannequin"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 bg-white border-t border-brand-gold/15">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-brand-maroon">
              Extended Atelier Services
            </h2>
            <div className="h-0.5 w-24 bg-brand-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherItems.map((item, i) => (
              <div
                key={i}
                className="bg-brand-blush/40 border border-brand-gold/10 rounded-xl p-8 space-y-3 flex items-start gap-4"
              >
                <div className="p-3.5 bg-brand-maroon rounded-lg text-white mt-1">
                  <Sparkles className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-brand-maroon mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-brand-charcoal/85 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
