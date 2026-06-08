import PageHeader from '../components/PageHeader';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function Blog() {
  const articles = [
    {
      title: 'Choosing Your Ideal Wedding Rental Gown in Sri Lanka',
      desc: 'Important tips for bridal dress rentals: fitting schedules, picking silhouettes that suit Sri Lankan weather, and booking timelines.',
      author: 'Mashi',
      date: 'June 05, 2026',
      image: '/assets/bridal_rentals.png',
      readTime: '5 min read'
    },
    {
      title: 'Uniform Care Guide: Maintaining Pristine White Pleats',
      desc: 'Laundering tips for girls school uniforms. How to wash white cotton-mix shirts and pleated dresses to prevent graying and seam tears.',
      author: 'Mashi',
      date: 'May 28, 2026',
      image: '/assets/school_uniforms.png',
      readTime: '4 min read'
    },
    {
      title: 'Bespoke Tailoring vs. Ready-to-Wear: The Couture Difference',
      desc: 'Why custom tailoring is a valuable investment. From selected fabrics and comfort to designs that boost personal styling confidence.',
      author: 'Mashi',
      date: 'May 12, 2026',
      image: '/assets/custom_tailoring.png',
      readTime: '6 min read'
    }
  ];

  return (
    <div className="relative animate-fade-in-up" id="blog-page-container">
      <PageHeader
        title="Fashion & Tailoring Blog"
        subtitle="Styling Advices, Rental Guides & Couture Tips from Our Atelier"
      />

      <section className="py-20 px-4 bg-brand-ivory" id="blog-list-section">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((art, idx) => (
              <article
                key={idx}
                className="bg-white rounded-lg overflow-hidden border border-brand-gold/15 shadow-lg hover:shadow-xl transition-shadow flex flex-col group"
              >
                <div className="h-60 relative overflow-hidden bg-brand-maroon">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6 space-y-3 flex-grow flex flex-col">
                  {/* Meta tags */}
                  <div className="flex items-center gap-4 text-xs text-brand-charcoal/50 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-brand-gold" />
                      {art.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-brand-gold" />
                      By {art.author}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-brand-maroon leading-snug group-hover:text-brand-gold-dark transition-colors">
                    {art.title}
                  </h3>
                  
                  <p className="text-sm text-brand-charcoal/80 leading-relaxed flex-grow">
                    {art.desc}
                  </p>

                  <div className="pt-4 border-t border-brand-gold/10 flex items-center justify-between">
                    <span className="text-xs text-brand-charcoal/60">{art.readTime}</span>
                    <span className="text-brand-maroon font-bold text-xs tracking-wider uppercase inline-flex items-center gap-1 hover:text-brand-gold-dark group-hover:translate-x-1 transition-all">
                      Read More
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
