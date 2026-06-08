import PageHeader from '../components/PageHeader';
import { Heart, ShieldCheck, Sparkles, Award } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Heart className="w-6 h-6 text-brand-gold" />,
      title: 'Passion for Styling',
      desc: 'We treat fashion as a form of art. Every line, pattern, and stitch is curated to express beauty.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-brand-gold" />,
      title: 'Flawless Fits',
      desc: 'No standard sizing here. Every custom dress is measured and altered to match your body measurements perfectly.'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-brand-gold" />,
      title: 'Premium Materials',
      desc: 'We source high-grade silks, laces, and uniform textiles in Sri Lanka to ensure comfort and durability.'
    },
    {
      icon: <Award className="w-6 h-6 text-brand-gold" />,
      title: 'Bridal Atelier Excellence',
      desc: 'Specialized in Sri Lankan wedding aesthetics, combining modern bridal silhouettes with heritage crafts.'
    }
  ];

  return (
    <div className="relative animate-fade-in-up" id="about-page-container">
      <PageHeader
        title="About The Designer"
        subtitle="The Creative Force behind Mashi Fashion Atelier Urapola"
      />

      {/* Main Content Details */}
      <section className="py-24 px-4 bg-brand-ivory" id="designer-story-section">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Portrait Image Column */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 border-2 border-brand-gold rounded-lg translate-x-4 translate-y-4 pointer-events-none"></div>
            <div className="relative rounded-lg overflow-hidden bg-brand-maroon shadow-xl h-[550px]">
              <img
                src="/assets/designer_profile.png"
                alt="Mashi in her Fashion Studio"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Text Details Column */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-maroon">
              Crafting Confidence, One Dress At A Time
            </h2>
            <div className="h-0.5 w-16 bg-brand-gold"></div>
            
            <p className="font-sans text-brand-charcoal/80 leading-relaxed text-base">
              Founded by Mashi, a passionate Sri Lankan fashion designer and entrepreneur, Mashi Fashion was born out of a simple dream: to create customized clothing that fits every woman's body and personality perfectly. 
            </p>
            <p className="font-sans text-brand-charcoal/80 leading-relaxed text-base">
              Starting as a small home studio in Colombo, Mashi's commitment to fine stitching and elegant shapes quickly gained popularity. Today, Mashi Fashion Atelier stands as a specialized destination for custom-made gowns, premium wedding dress rentals, and durable girls' school uniforms.
            </p>
            <p className="font-sans text-brand-charcoal/80 leading-relaxed text-base">
              Our designs reflect a beautiful blend of traditional Sri Lankan heritage fabrics (like handcrafted silks) and modern Western silhouettes. Whether you're a bride searching for a stunning rental gown, a mother looking for durable uniforms, or an individual seeking bespoke attire, Mashi Fashion covers all tailoring requirements with precision.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-6 border-t border-brand-gold/15">
              <div>
                <span className="block font-display text-3xl font-bold text-brand-maroon">100%</span>
                <span className="text-xs font-semibold text-brand-gold-dark uppercase tracking-wider">Custom Tailored Fit</span>
              </div>
              <div>
                <span className="block font-display text-3xl font-bold text-brand-maroon">500+</span>
                <span className="text-xs font-semibold text-brand-gold-dark uppercase tracking-wider">Satisfied Clients</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Philosophy and Values */}
      <section className="py-24 px-4 bg-white border-t border-brand-gold/15" id="brand-values-section">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-brand-maroon">
              Our Design Philosophy
            </h2>
            <div className="h-0.5 w-24 bg-brand-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, i) => (
              <div
                key={i}
                className="bg-brand-blush/40 border border-brand-gold/10 rounded-xl p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="p-3 bg-brand-maroon rounded-lg inline-block">
                  {val.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-brand-maroon">
                  {val.title}
                </h3>
                <p className="text-sm text-brand-charcoal/85 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
