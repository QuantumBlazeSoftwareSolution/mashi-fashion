import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();



  return (
    <footer className="bg-brand-maroon-dark text-brand-ivory border-t border-brand-gold/20 pt-16 pb-8 font-sans" id="site-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="flex flex-col items-start">
              <span className="font-display text-2xl font-bold tracking-widest text-brand-gold uppercase">
                Mashi Fashion
              </span>
              <span className="text-[10px] font-sans tracking-[0.25em] text-brand-gold-light/70 uppercase -mt-1">
                Atelier Urapola
              </span>
            </Link>
            <p className="text-sm text-brand-ivory/80 leading-relaxed max-w-sm">
              Creating premium custom gowns, elegant wedding rentals, and beautifully tailored school uniforms. Crafted with passion, precision, and Sri Lankan heritage.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-brand-gold/30 hover:border-brand-gold text-brand-gold-light hover:text-brand-gold transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/share/1E2kdDYHxG/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-brand-gold/30 hover:border-brand-gold text-brand-gold-light hover:text-brand-gold transition-colors duration-300"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold tracking-wider text-brand-gold">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-brand-ivory/80 hover:text-brand-gold transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-brand-ivory/80 hover:text-brand-gold transition-colors duration-200">
                  About the Designer
                </Link>
              </li>
              <li>
                <Link to="/our-works" className="text-brand-ivory/80 hover:text-brand-gold transition-colors duration-200">
                  Our Works
                </Link>
              </li>
              <li>
                <Link to="/quote" className="text-brand-ivory/80 hover:text-brand-gold transition-colors duration-200">
                  Get a Quote
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-brand-ivory/80 hover:text-brand-gold transition-colors duration-200">
                  Book an Appointment
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-brand-ivory/80 hover:text-brand-gold transition-colors duration-200">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold tracking-wider text-brand-gold">
              Contact Atelier
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                <span className="text-brand-ivory/80 leading-relaxed">
                  Ruwanwalla rd, Urapola,<br />Sri Lanka, 11126
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <span className="text-brand-ivory/80">
                  +94 71 161 2290
                </span>
              </li>

              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                <span className="text-brand-ivory/80">
                  Tue - Sun: 9:00 AM - 6:00 PM<br />
                  Monday: Closed
                </span>
              </li>
            </ul>
          </div>



        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-brand-gold/15 text-center text-xs text-brand-ivory/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>&copy; {currentYear} Mashi Fashion. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
