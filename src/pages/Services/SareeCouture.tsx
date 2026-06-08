import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import { CheckCircle2, Ruler, Palette, Scissors } from 'lucide-react';

export default function SareeCouture() {
  const sareeOptions = [
    'Bridal Saree Jackets (Embroidery & Beadwork)',
    'High-Neck & Modern Cut Jackets',
    'Pre-Pleated Ready-to-Wear Saree Made-up',
    'Saree Draping & Silhouette Styling',
    'Casual & Party Wear Saree Jackets',
    'Traditional Sri Lankan Osariya Jackets'
  ];

  const steps = [
    {
      icon: <Palette className="w-6 h-6 text-brand-gold" />,
      title: 'Fabric & Motif Selection',
      desc: 'Work with Mashi to select premium lining, luxury silks, and coordinate custom beadwork or lace overlays.'
    },
    {
      icon: <Ruler className="w-6 h-6 text-brand-gold" />,
      title: 'Precision Measurements',
      desc: 'We take detailed measurements at our Urapola boutique to ensure a skin-fit structure that supports comfortable arm movement.'
    },
    {
      icon: <Scissors className="w-6 h-6 text-brand-gold" />,
      title: 'Embroidery & Finishing',
      desc: 'Our artisans hand-sew beads, pearls, and custom piping, delivering a masterfully completed jacket.'
    }
  ];

  return (
    <div className="relative animate-fade-in-up" id="saree-couture-service-page">
      <PageHeader
        title="Saree Jackets & Made-up"
        subtitle="Exquisite Bridal Jackets and Effortless Pre-Pleated Ready-to-Wear Sarees"
      />

      {/* Main Info Section */}
      <section className="py-24 px-4 bg-brand-ivory">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-display text-3xl font-bold text-brand-maroon">
              Bespoke Sri Lankan Saree Couture
            </h2>
            <div className="h-0.5 w-16 bg-brand-gold"></div>
            <p className="font-sans text-brand-charcoal/80 leading-relaxed">
              Elevate your traditional wear with custom-tailored saree jackets that fit like a second skin. At Mashi Fashion, we design saree jackets featuring intricate hand-embroidery, premium lace appliques, and modern cutouts that add a touch of contemporary elegance to your ensemble.
            </p>
            <p className="font-sans text-brand-charcoal/80 leading-relaxed">
              We also specialize in **Saree Made-up services**, transforming your traditional saree into a pre-pleated, ready-to-wear gown that you can drape effortlessly in under a minute without losing the grace of classic folds.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {sareeOptions.map((opt, i) => (
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
                href="https://wa.me/94711612290?text=Hi%20Mashi!%20I%27d%20like%20to%20inquire%20about%20custom%20saree%20jacket%20tailoring%20and%20pre-pleating."
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
                src="/assets/bridal_details.png"
                alt="Intricate bridal embroidery and beadwork details"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Process Journey */}
      <section className="py-24 px-4 bg-white border-t border-brand-gold/15">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-brand-maroon">
              Crafting Your Custom Jacket
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
