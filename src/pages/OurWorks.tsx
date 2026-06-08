import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';
import { Eye, X, Calendar } from 'lucide-react';

interface WorkItem {
  id: string;
  title: string;
  category: string;
  image: string;
  desc: string;
  details: string;
}

export default function OurWorks() {
  const [filter, setFilter] = useState('All');
  const [selectedItem, setSelectedItem] = useState<WorkItem | null>(null);

  const categories = ['All', 'Custom Gowns', 'Bridal Rentals', 'School Uniforms', 'Casual Wear'];

  const items: WorkItem[] = [
    {
      id: 'golden-bridal-saree',
      title: 'Golden Sri Lankan Bridal Saree',
      category: 'Bridal Rentals',
      image: '/assets/hero_dress.png',
      desc: 'Intricate gold thread work on premium ivory silk, custom altered.',
      details: 'Handcrafted with traditional Sri Lankan motifs. Features over 100 hours of custom embroidery. Popular for traditional weddings and luxury pre-shoots.'
    },
    {
      id: 'bespoke-evening-gown',
      title: 'Bespoke Evening Couture',
      category: 'Custom Gowns',
      image: '/assets/custom_tailoring.png',
      desc: 'Elegant tailored gowns with lace bodice and flowing train.',
      details: 'Custom drafted and tailored to fit the client’s exact body measurements. Made from premium imported Chantilly lace and heavy silk satin.'
    },
    {
      id: 'floral-wedding-gown',
      title: 'Floral White Wedding Gown',
      category: 'Bridal Rentals',
      image: '/assets/bridal_rentals.png',
      desc: 'Classic white floral lace gown displayed in our Urapola studio.',
      details: 'Features a soft sweetheart neckline with trailing floral lace appliqués and an elegant tulle train. Includes custom fittings.'
    },
    {
      id: 'school-uniform-pleated',
      title: 'Girls Pleated School Uniform',
      category: 'School Uniforms',
      image: '/assets/school_uniforms.png',
      desc: 'White, durable, custom double-stitched school wear.',
      details: 'Tailored for everyday school wear with deep box pleats and comfortable premium breathable cotton-mix fabric. Features double-reinforced seams.'
    },
    {
      id: 'modern-saree-couture',
      title: 'Modern Sri Lankan Saree Couture',
      category: 'Custom Gowns',
      image: '/assets/designer_profile.png',
      desc: 'Curated green silk and gold border tailored saree collection.',
      details: 'A contemporary take on the traditional Sri Lankan saree, combining rich green fabrics with custom gold border styling.'
    },
    {
      id: 'blush-pink-casual',
      title: 'Blush Pink Casual Fusion',
      category: 'Casual Wear',
      image: '/assets/casual_wear.png',
      desc: 'Comfortable daily wear dress featuring traditional Sri Lankan styles.',
      details: 'Breathable cream and blush pink panels with subtle embroidery. Perfect for afternoon teas, casual events, and warm climates.'
    },
    {
      id: 'bridal-lace-details',
      title: 'Couture Bridal Lace Veil & Bodice',
      category: 'Bridal Rentals',
      image: '/assets/bridal_details.png',
      desc: 'Handcrafted lace details and delicate bridal veil.',
      details: 'Close-up of our high-end rental collection details, showcasing fine beads, delicate floral lace, and a matching hand-stitched veil.'
    },
    {
      id: 'maroon-lace-evening-gown',
      title: 'Maroon Lace Evening Gown',
      category: 'Custom Gowns',
      image: '/assets/maroon_gown.png',
      desc: 'An elegant custom-tailored maroon lace evening gown.',
      details: 'A premium full-length evening wear gown featuring a semi-sheer lace neckline, short sleeves, and a trailing skirt, tailored in deep maroon.'
    },
    {
      id: 'floral-linen-casual-dress',
      title: 'Floral Linen Casual Dress',
      category: 'Casual Wear',
      image: '/assets/linen_dress.png',
      desc: 'Comfortable daily wear floral linen wrap dress.',
      details: 'A stylish V-neck floral linen wrap dress with gold button highlights, designed for relaxed elegance and premium everyday style.'
    }
  ];

  const filteredItems = filter === 'All'
    ? items
    : items.filter(item => item.category === filter);

  const handleWhatsAppInquiry = (item: WorkItem) => {
    const waPhone = '94711612290';
    const message = `Hello Mashi Fashion! I am viewing your design "${item.title}" (${item.category}) in your "Our Works" online gallery and would like to inquire about its availability/pricing.`;
    window.open(`https://wa.me/${waPhone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="relative animate-fade-in-up" id="our-works-page-container">
      <PageHeader
        title="Our Works"
        subtitle="Browse Our Portfolio Gallery of Custom Creations & Rentals"
      />

      <section className="py-20 px-4 bg-brand-ivory" id="our-works-gallery-section">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Filters Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setFilter(cat)}
                className={`font-sans text-xs tracking-wider uppercase font-semibold py-2.5 px-5 rounded-full border transition-all duration-300 cursor-pointer ${
                  filter === cat
                    ? 'bg-brand-maroon border-brand-maroon text-white shadow-md'
                    : 'bg-white border-brand-gold/25 text-brand-charcoal hover:border-brand-maroon hover:text-brand-maroon'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedItem(item)}
                className="bg-white rounded-lg overflow-hidden border border-brand-gold/10 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer"
              >
                <div className="h-80 relative overflow-hidden bg-brand-maroon">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                    <span className="p-3 bg-brand-gold rounded-full text-brand-maroon-dark shadow-md transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <Eye className="w-5 h-5" />
                    </span>
                  </div>
                </div>
                <div className="p-6 space-y-2 flex-grow">
                  <span className="text-[10px] font-bold text-brand-gold-dark uppercase tracking-wider block">
                    {item.category}
                  </span>
                  <h3 className="font-display text-lg font-bold text-brand-maroon group-hover:text-brand-gold-dark transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox / Modal View */}
          {selectedItem && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in-up">
              <div className="relative w-full max-w-4xl bg-brand-ivory rounded-xl overflow-hidden shadow-2xl border border-brand-gold/25 flex flex-col md:flex-row">
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 z-20 p-2 bg-brand-maroon text-white hover:bg-brand-gold hover:text-brand-maroon-dark rounded-full transition-colors focus:outline-none"
                  aria-label="Close details"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Left: Image */}
                <div className="w-full md:w-1/2 h-64 md:h-[450px] relative bg-brand-maroon">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Right: Info details */}
                <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div>
                      <span className="text-xs font-bold text-brand-gold-dark uppercase tracking-widest block mb-1">
                        {selectedItem.category}
                      </span>
                      <h3 className="font-display text-2xl font-bold text-brand-maroon">
                        {selectedItem.title}
                      </h3>
                    </div>
                    <div className="h-0.5 w-12 bg-brand-gold"></div>
                    <p className="text-sm font-semibold text-brand-charcoal leading-relaxed">
                      {selectedItem.desc}
                    </p>
                    <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                      {selectedItem.details}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-brand-gold/15">
                    <button
                      onClick={() => handleWhatsAppInquiry(selectedItem)}
                      className="bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs tracking-wider uppercase py-3.5 px-6 rounded-md transition-all flex items-center justify-center gap-2"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 1.977 14.053.953 11.432.953c-5.44 0-9.866 4.372-9.87 9.802 0 1.764.476 3.49 1.38 5.02L1.993 21.8l6.197-1.619" />
                      </svg>
                      Inquire via WhatsApp
                    </button>
                    <Link
                      to="/booking"
                      onClick={() => setSelectedItem(null)}
                      className="bg-brand-maroon hover:bg-brand-maroon-light text-white font-semibold text-xs tracking-wider uppercase py-3.5 px-6 rounded-md transition-all text-center"
                    >
                      Book Fitting
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* Call to Action Booking */}
          <div className="text-center pt-8">
            <div className="max-w-xl mx-auto bg-brand-blush/40 border border-brand-gold/15 p-8 rounded-xl space-y-4 shadow-sm">
              <h4 className="font-display text-xl font-bold text-brand-maroon">
                Want to Consult a Design?
              </h4>
              <p className="text-sm text-brand-charcoal/80">
                Book a consultation online at our Urapola atelier to check fitting schedules, design templates, and availability.
              </p>
              <Link
                to="/booking"
                className="inline-flex items-center gap-2 bg-brand-maroon hover:bg-brand-maroon-light text-white font-semibold text-xs tracking-wider uppercase py-3 px-6 rounded-md transition-all shadow-md shadow-brand-maroon/20"
              >
                <Calendar className="w-4 h-4" />
                Book Consultation
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
