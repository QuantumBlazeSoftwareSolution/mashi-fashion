import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import { CheckCircle } from 'lucide-react';

export default function SchoolUniforms() {
  const uniformFeatures = [
    {
      title: 'Premium Breathable Fabrics',
      desc: 'We source lightweight, high-grade cotton-mix fabrics that keep kids cool and comfortable in Sri Lankan tropical weather.'
    },
    {
      title: 'Double-Stitched Durability',
      desc: 'Double stitching at seams, armholes, and pockets prevents tears during school play and activities.'
    },
    {
      title: 'Perfect Pleats & Alignments',
      desc: 'Carefully measured and pressed pleats that hold their shape even after repeated washing and ironing.'
    },
    {
      title: 'Custom Fitted Sizes',
      desc: 'Say goodbye to baggy, ill-fitting store uniforms. Our custom tailoring fits the unique heights and sizes of growing kids.'
    }
  ];

  return (
    <div className="relative animate-fade-in-up" id="school-uniforms-service-page">
      <PageHeader
        title="Girls' School Uniforms"
        subtitle="Durable, Neat, and Custom-Tailored School Wear"
      />

      {/* Main Info Section */}
      <section className="py-24 px-4 bg-brand-ivory">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-display text-3xl font-bold text-brand-maroon">
              Neat School Uniforms Tailored for Daily Comfort
            </h2>
            <div className="h-0.5 w-16 bg-brand-gold"></div>
            
            <p className="font-sans text-brand-charcoal/80 leading-relaxed">
              Ill-fitting store-bought uniforms can cause discomfort and make students feel self-conscious. At Mashi Fashion, we offer custom school uniform tailoring for girls that balances smart aesthetics, long-lasting durability, and comfort.
            </p>
            <p className="font-sans text-brand-charcoal/80 leading-relaxed">
              We specialize in Sri Lankan national curriculum school uniforms, preschool dresses, and specific school dress codes. Using high-grade white textiles that resist staining and stay bright, we make sure school days are hassle-free.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch gap-4">
              <Link
                to="/booking"
                className="bg-brand-maroon hover:bg-brand-maroon-light text-white font-semibold text-xs tracking-wider uppercase py-3.5 px-6 rounded-md text-center transition-all duration-300 shadow-md shadow-brand-maroon/20"
              >
                Book Uniform Fitting
              </Link>
              <Link
                to="/quote"
                className="bg-transparent border border-brand-maroon text-brand-maroon hover:bg-brand-maroon hover:text-white font-semibold text-xs tracking-wider uppercase py-3.5 px-6 rounded-md text-center transition-all duration-300"
              >
                Get a Price Quote
              </Link>
            </div>
          </div>

          {/* Service Image Column */}
          <div className="lg:col-span-6 relative">
            <div className="absolute inset-0 border-2 border-brand-gold rounded-lg translate-x-4 translate-y-4 pointer-events-none"></div>
            <div className="relative rounded-lg overflow-hidden bg-brand-maroon shadow-xl h-[450px]">
              <img
                src="/assets/school_uniforms.png"
                alt="Neat girls white pleated school uniform on hanger"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Quality Details */}
      <section className="py-24 px-4 bg-white border-t border-brand-gold/15">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-brand-maroon">
              Our Uniform Quality Guidelines
            </h2>
            <div className="h-0.5 w-24 bg-brand-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {uniformFeatures.map((feat, i) => (
              <div
                key={i}
                className="bg-brand-blush/40 border border-brand-gold/10 rounded-xl p-8 space-y-3 flex items-start gap-4"
              >
                <div className="p-3.5 bg-brand-maroon rounded-lg text-white mt-1">
                  <CheckCircle className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-brand-maroon mb-1">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-brand-charcoal/85 leading-relaxed">
                    {feat.desc}
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
