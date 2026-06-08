import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import { CheckCircle2, Ruler, Palette, Scissors } from 'lucide-react';

export default function CustomDresses() {
  const customOptions = [
    'Evening & Gala Gowns',
    'Custom Designer Sarees & Blouses',
    'Casual Elegance Wear',
    'Corporate Power Dresses',
    'Cocktail & Homecoming Attire',
    'Party & Event Dresses'
  ];

  const steps = [
    {
      icon: <Palette className="w-6 h-6 text-brand-gold" />,
      title: 'Design Consultation',
      desc: 'Meet Mashi to discuss sketches, colors, patterns, and references that align with your style goals.'
    },
    {
      icon: <Ruler className="w-6 h-6 text-brand-gold" />,
      title: 'Measurements & Sourcing',
      desc: 'Get measured at our Urapola atelier and select from our curated stock of premium silk, cotton, and lace.'
    },
    {
      icon: <Scissors className="w-6 h-6 text-brand-gold" />,
      title: 'Fitting & Adjustments',
      desc: 'A trial fitting is scheduled. We pin, stitch, and fine-tune lines to create a flawless silhouette before finishing.'
    }
  ];

  return (
    <div className="relative animate-fade-in-up" id="custom-dresses-service-page">
      <PageHeader
        title="Custom-Made Dresses"
        subtitle="Bespoke Couture Tailoring Designed for Perfect Fits"
      />

      {/* Main Info Section */}
      <section className="py-24 px-4 bg-brand-ivory">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-display text-3xl font-bold text-brand-maroon">
              Unique Apparel Crafted Exclusively for You
            </h2>
            <div className="h-0.5 w-16 bg-brand-gold"></div>
            <p className="font-sans text-brand-charcoal/80 leading-relaxed">
              Why settle for mass-produced standard clothes when you can have a dress tailored to your exact body shape and taste? At Mashi Fashion, we craft custom-made gowns, dresses, and sarees that enhance your best features and build styling confidence.
            </p>
            <p className="font-sans text-brand-charcoal/80 leading-relaxed">
              Mashi personally works on every pattern, ensuring premium stitching, clean lining, and high-quality drapes. Choose from our exquisite fabrics or bring your own — we guarantee a masterwork.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {customOptions.map((opt, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0" />
                  <span className="text-sm font-semibold text-brand-charcoal/90">{opt}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch gap-4">
              <Link
                to="/booking"
                className="bg-brand-maroon hover:bg-brand-maroon-light text-white font-semibold text-xs tracking-wider uppercase py-3.5 px-6 rounded-md text-center transition-all duration-300"
              >
                Book Fitting Consultation
              </Link>
              <a
                href="https://wa.me/94711612290?text=Hi%20Mashi!%20I%27d%20like%20to%20get%20a%20custom%20dress%20made.%20Can%20we%20discuss?"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white font-semibold text-xs tracking-wider uppercase py-3.5 px-6 rounded-md text-center transition-all duration-300 flex items-center justify-center gap-2"
              >
                Inquire via WhatsApp
              </a>
            </div>
          </div>

          {/* Service Image Column */}
          <div className="lg:col-span-6 relative">
            <div className="absolute inset-0 border-2 border-brand-gold rounded-lg translate-x-4 translate-y-4 pointer-events-none"></div>
            <div className="relative rounded-lg overflow-hidden bg-brand-maroon shadow-xl h-[450px]">
              <img
                src="/assets/custom_tailoring.png"
                alt="Custom dress tailoring workspace sketches"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

        </div>
      </section>

      {/* The Bespoke Journey Process */}
      <section className="py-24 px-4 bg-white border-t border-brand-gold/15">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-brand-maroon">
              The Bespoke Tailoring Process
            </h2>
            <div className="h-0.5 w-24 bg-brand-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <div
                key={i}
                className="bg-brand-blush/40 border border-brand-gold/10 rounded-xl p-8 space-y-4 shadow-sm text-center flex flex-col items-center"
              >
                <div className="p-3 bg-brand-maroon rounded-lg text-white">
                  {s.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-brand-maroon">
                  {s.title}
                </h3>
                <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
