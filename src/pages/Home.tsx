import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Star } from 'lucide-react';

export default function Home() {
  const services = [
    {
      title: 'Custom-Made Gowns',
      description: 'Bespoke tailoring and fashion design crafted to fit your unique style and body shape perfectly.',
      image: '/assets/custom_tailoring.png',
      link: '/services/custom-dresses'
    },
    {
      title: 'Wedding Dress Rentals',
      description: 'Elegant bridal dress hire services featuring premium luxury gowns for your dream Sri Lankan wedding.',
      image: '/assets/bridal_rentals.png',
      link: '/services/wedding-rentals'
    },
    {
      title: 'School Uniforms for Girls',
      description: 'Tidy, durable, and custom-tailored school uniforms designed with premium stitching and comfort.',
      image: '/assets/school_uniforms.png',
      link: '/services/school-uniforms'
    },
    {
      title: 'Other Fashion Services',
      description: 'From evening wear and casual chic to custom corporate attire and design consultations.',
      image: '/assets/casual_wear.png',
      link: '/services/other'
    }
  ];

  const testimonials = [
    {
      name: 'Priyani Fernando',
      role: 'Bride',
      quote: 'The wedding rental collection is breathtaking! Mashi helped me choose the perfect gown, and the minor alterations were flawless. Strongly recommend!',
      rating: 5
    },
    {
      name: 'Dilani Perera',
      role: 'Mother of 2',
      quote: 'Ordered school uniforms for my daughters. The quality of fabric and precision stitching are top-tier. They fit perfectly and are very durable.',
      rating: 5
    },
    {
      name: 'Senuri Wickramasinghe',
      role: 'Fashion Client',
      quote: 'Mashi designed an evening wear dress for an award night. I felt like royalty. Her attention to detail and choice of fabrics are outstanding.',
      rating: 5
    }
  ];

  return (
    <div className="relative animate-fade-in-up" id="homepage-container">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-brand-maroon text-white pt-20 overflow-hidden border-b border-brand-gold/10">
        <div className="absolute inset-0 bg-black/45 z-10"></div>
        
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/assets/hero_dress.png"
            alt="Mashi Fashion Bridal Showcase"
            className="w-full h-full object-cover object-center scale-105 animate-pulse duration-10000"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 py-20 flex flex-col items-start justify-center">
          <div className="max-w-2xl space-y-6">

            <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight leading-none text-brand-ivory">
              Premium Custom Fashion & <br className="hidden sm:inline" />
              <span className="text-brand-gold">Bridal Rentals</span> in Sri Lanka
            </h1>
            <p className="font-sans text-base sm:text-lg text-brand-ivory/90 leading-relaxed tracking-wide">
              Welcome to Mashi Fashion. We design bespoke dresses, offer luxury wedding gowns for rent, and tailor neat school uniforms with Sri Lankan elegance and premium craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Link
                to="/booking"
                className="bg-brand-gold hover:bg-brand-gold-dark text-brand-maroon-dark font-sans text-sm tracking-wider uppercase font-semibold py-3.5 px-8 rounded-md transition-all duration-300 shadow-lg shadow-brand-gold/20 flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Book Consultation
              </Link>
              <Link
                to="/our-works"
                className="bg-transparent border border-brand-ivory hover:bg-brand-ivory hover:text-brand-maroon font-sans text-sm tracking-wider uppercase font-semibold py-3.5 px-8 rounded-md transition-all duration-300 flex items-center justify-center gap-2"
              >
                Explore Collection
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Services Preview */}
      <section className="py-24 px-4 bg-brand-ivory" id="services-preview-section">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-maroon">
              Our Exclusive Services
            </h2>
            <div className="h-0.5 w-24 bg-brand-gold mx-auto"></div>
            <p className="font-sans text-sm sm:text-base text-brand-charcoal/80 leading-relaxed">
              We specialize in bringing your dream outfit to life, offering customized fashion collections, bridal wear rentals, and uniform tailoring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden border border-brand-gold/10 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
              >
                <div className="h-56 relative overflow-hidden bg-brand-maroon">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow space-y-3">
                  <h3 className="font-display text-lg font-bold text-brand-maroon">
                    {service.title}
                  </h3>
                  <p className="text-sm text-brand-charcoal/80 leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  <Link
                    to={service.link}
                    className="text-brand-gold-dark hover:text-brand-maroon font-semibold text-xs tracking-wider uppercase inline-flex items-center gap-1.5 pt-2 group"
                  >
                    View Details
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Designer Brand Intro */}
      <section className="py-20 px-4 bg-brand-blush/60 border-y border-brand-gold/10" id="brand-story-preview">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 border-2 border-brand-gold rounded-lg translate-x-4 translate-y-4 pointer-events-none"></div>
            <div className="relative rounded-lg overflow-hidden bg-brand-maroon shadow-xl h-[450px]">
              <img
                src="/assets/designer_profile.png"
                alt="Designer Mashi"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
          <div className="lg:col-span-7 space-y-6">
            <span className="text-brand-gold-dark font-sans text-xs tracking-widest uppercase font-semibold block">
              Meet the Designer
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-maroon leading-tight">
              Bespoke Sri Lankan Fashion Designed with Love & Heritage
            </h2>
            <div className="h-0.5 w-16 bg-brand-gold"></div>
            <p className="font-sans text-sm sm:text-base text-brand-charcoal/80 leading-relaxed">
              Mashi Fashion is owned and curated by Mashi, a Sri Lankan entrepreneur with years of experience in couture bridal gown rendering, girls' school uniforms, and custom tailoring. 
            </p>
            <p className="font-sans text-sm sm:text-base text-brand-charcoal/80 leading-relaxed">
              Every dress we design tells a story of artistry, with selected threads, rich textiles, and premium finishes. We make sure you feel confident, stylish, and perfect on your special day.
            </p>
            <div className="pt-2">
              <Link
                to="/about"
                className="bg-brand-maroon hover:bg-brand-maroon-light text-white font-sans text-xs tracking-wider uppercase font-semibold py-3 px-6 rounded-md transition-all duration-300 inline-flex items-center gap-2"
              >
                Read Our Story
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. How It Works (Process Flow) */}
      <section className="py-24 px-4 bg-brand-ivory" id="how-it-works-section">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="text-brand-gold-dark font-sans text-xs tracking-widest uppercase font-semibold block">
              Simple & Reliable
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-maroon">
              How It Works
            </h2>
            <div className="h-0.5 w-24 bg-brand-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Step 1 */}
            <div className="bg-white rounded-lg p-8 border border-brand-gold/10 shadow-sm hover:shadow-md transition-shadow relative flex flex-col items-center text-center space-y-4">
              <span className="absolute top-[-20px] bg-brand-gold text-brand-maroon-dark text-xl font-bold font-display w-12 h-12 flex items-center justify-center rounded-full shadow-md border border-brand-ivory">
                01
              </span>
              <h3 className="font-display text-xl font-bold text-brand-maroon pt-4">
                Consultation
              </h3>
              <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                Book a consultation online or via WhatsApp. Share your ideas, reference pictures, budget, and fashion targets.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-lg p-8 border border-brand-gold/10 shadow-sm hover:shadow-md transition-shadow relative flex flex-col items-center text-center space-y-4">
              <span className="absolute top-[-20px] bg-brand-gold text-brand-maroon-dark text-xl font-bold font-display w-12 h-12 flex items-center justify-center rounded-full shadow-md border border-brand-ivory">
                02
              </span>
              <h3 className="font-display text-xl font-bold text-brand-maroon pt-4">
                Measurements & Fabric
              </h3>
              <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                Visit our Urapola atelier for precise measurements. Select high-end silk, cotton, or lace fabrics guided by our expertise.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-lg p-8 border border-brand-gold/10 shadow-sm hover:shadow-md transition-shadow relative flex flex-col items-center text-center space-y-4">
              <span className="absolute top-[-20px] bg-brand-gold text-brand-maroon-dark text-xl font-bold font-display w-12 h-12 flex items-center justify-center rounded-full shadow-md border border-brand-ivory">
                03
              </span>
              <h3 className="font-display text-xl font-bold text-brand-maroon pt-4">
                Fitting & Collection
              </h3>
              <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                Try on the partially constructed dress. We make final micro-alterations and deliver a perfect masterwork.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Customer Testimonials */}
      <section className="py-24 px-4 bg-brand-maroon text-white relative overflow-hidden" id="testimonials-section">
        {/* Background Gradients */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-[10%] left-[20%] w-[30%] h-[50%] bg-brand-gold filter blur-[100px] rounded-full"></div>
          <div className="absolute bottom-[10%] right-[20%] w-[30%] h-[50%] bg-brand-gold filter blur-[100px] rounded-full"></div>
        </div>

        <div className="relative max-w-7xl mx-auto space-y-16 z-10">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="text-brand-gold font-sans text-xs tracking-widest uppercase font-semibold block">
              Testimonials
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-gold">
              What Our Clients Say
            </h2>
            <div className="h-0.5 w-24 bg-brand-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test, index) => (
              <div
                key={index}
                className="bg-brand-maroon-dark/60 border border-brand-gold/20 rounded-lg p-8 space-y-4 shadow-xl backdrop-blur-sm"
              >
                <div className="flex items-center gap-1">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-brand-gold" />
                  ))}
                </div>
                <p className="text-brand-ivory/90 text-sm leading-relaxed italic">
                  "{test.quote}"
                </p>
                <div className="pt-2 border-t border-brand-gold/15 flex items-center justify-between">
                  <span className="font-display text-brand-gold font-bold text-sm">
                    {test.name}
                  </span>
                  <span className="text-brand-ivory/60 text-xs tracking-wider uppercase font-semibold">
                    {test.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Booking CTA Section */}
      <section className="py-24 px-4 bg-brand-ivory border-t border-brand-gold/15" id="cta-booking-section">
        <div className="max-w-4xl mx-auto bg-white border border-brand-gold/25 rounded-2xl shadow-xl overflow-hidden p-8 sm:p-12 text-center space-y-6 relative">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-brand-gold"></div>
          
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-maroon leading-tight">
            Ready to Dress Elegantly for Your Next Big Occasion?
          </h2>
          <p className="font-sans text-sm sm:text-base text-brand-charcoal/85 leading-relaxed max-w-2xl mx-auto">
            Book an appointment online for custom dress measurements, bridal gown selection, or girls' school uniforms. Our Urapola boutique is ready to receive you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/booking"
              className="w-full sm:w-auto bg-brand-maroon hover:bg-brand-maroon-light text-white font-sans text-sm tracking-wider uppercase font-semibold py-3.5 px-8 rounded-md transition-all shadow-md shadow-brand-maroon/20 flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
            </Link>
            <a
              href="https://wa.me/94711612290?text=Hello%20Mashi%20Fashion!%20I%27d%20like%20to%20chat%20about%20booking%20a%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba59] text-white font-sans text-sm tracking-wider uppercase font-semibold py-3.5 px-8 rounded-md transition-all flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 1.977 14.053.953 11.432.953c-5.44 0-9.866 4.372-9.87 9.802 0 1.764.476 3.49 1.38 5.02L1.993 21.8l6.197-1.619" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
