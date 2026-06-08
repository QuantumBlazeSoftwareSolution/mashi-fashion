import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import { CheckCircle2, Ruler, Palette, Scissors } from 'lucide-react';

export default function BridalOccasion() {
  const occasionOptions = [
    'Elegant Going-Away Dresses',
    'Homecoming Gowns & Outfits',
    'Custom Bridal Lehengas & Skirts',
    'Ceremonial & Event Wear',
    'Premium Bridesmaid Dresses',
    'Mother of the Bride/Groom Attire'
  ];

  const steps = [
    {
      icon: <Palette className="w-6 h-6 text-brand-gold" />,
      title: 'Theme & Silhouette Design',
      desc: 'Collaborate with Mashi to choose silhouettes (A-line, mermaid, flared lehengas) that fit the event theme and colors.'
    },
    {
      icon: <Ruler className="w-6 h-6 text-brand-gold" />,
      title: 'Detailed Fittings',
      desc: 'We conduct two to three fittings at our Urapola studio to make sure every seam, pleat, and drape falls perfectly.'
    },
    {
      icon: <Scissors className="w-6 h-6 text-brand-gold" />,
      title: 'Delicate Embellishments',
      desc: 'Hand-stitching pearls, crystals, or custom Sri Lankan lace to provide an unmatched premium feel.'
    }
  ];

  return (
    <div className="relative animate-fade-in-up" id="bridal-occasion-service-page">
      <PageHeader
        title="Going-Away & Homecoming Wear"
        subtitle="Stunning Gowns, Ceremony Wear, and Custom Lehengas Crafted to Turn Heads"
      />

      {/* Main Info Section */}
      <section className="py-24 px-4 bg-brand-ivory">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-display text-3xl font-bold text-brand-maroon">
              Celebrate Life’s Most Beautiful Moments
            </h2>
            <div className="h-0.5 w-16 bg-brand-gold"></div>
            <p className="font-sans text-brand-charcoal/80 leading-relaxed">
              Your wedding day is only one part of the celebration. The going-away dress and homecoming outfit carry equal significance in Sri Lankan wedding traditions. At Mashi Fashion, we design jaw-dropping, custom going-away gowns and homecoming wear that keep you comfortable yet radiantly beautiful.
            </p>
            <p className="font-sans text-brand-charcoal/80 leading-relaxed">
              We also customize luxury bridal lehengas, bridesmaid outfits, and special ceremony dresses tailored with rich embroidery, custom draping, and select premium fabrics that coordinate with your bridal theme.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {occasionOptions.map((opt, i) => (
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
                href="https://wa.me/94711612290?text=Hi%20Mashi!%20I%27d%20like%20to%20inquire%20about%20a%20going-away%20dress%20or%20homecoming%20gown."
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
                src="/assets/maroon_gown.png"
                alt="Elegant custom maroon going-away or ceremony evening gown"
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
              Designing Your Special Wear
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
