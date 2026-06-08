import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, PhoneCall } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [location]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path: string) => location.pathname === path;
  const isServicesActive = location.pathname.startsWith('/services');

  const getLinkClass = (path: string) => {
    const base = "font-sans font-medium text-sm tracking-wider uppercase transition-colors duration-200 pb-1";
    if (scrolled) {
      return `${base} ${activeStyleScrolled(path)}`;
    } else {
      return `${base} ${activeStyleUnscrolled(path)}`;
    }
  };

  const activeStyleScrolled = (path: string) => {
    return isActive(path) ? 'text-brand-maroon border-b border-brand-gold' : 'text-brand-charcoal hover:text-brand-maroon';
  };

  const activeStyleUnscrolled = (path: string) => {
    return isActive(path) ? 'text-brand-gold border-b border-brand-gold' : 'text-brand-ivory hover:text-brand-gold';
  };

  const getServicesBtnClass = () => {
    const base = "flex items-center gap-1 font-sans font-medium text-sm tracking-wider uppercase transition-colors duration-200 focus:outline-none pb-1";
    if (isServicesActive) {
      return `${base} ${scrolled ? 'text-brand-maroon' : 'text-brand-gold'}`;
    }
    return `${base} ${scrolled ? 'text-brand-charcoal hover:text-brand-maroon' : 'text-brand-ivory hover:text-brand-gold'}`;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'shadow-md py-3 glass-panel border-b border-brand-gold/10'
          : 'bg-transparent py-5'
      }`}
      id="main-navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex flex-col items-start group">
              <span className={`font-display text-2xl font-bold tracking-widest uppercase transition-colors duration-300 ${
                scrolled ? 'text-brand-maroon group-hover:text-brand-gold' : 'text-brand-gold group-hover:text-brand-ivory'
              }`}>
                Mashi Fashion
              </span>
              <span className={`text-[10px] font-sans tracking-[0.25em] uppercase -mt-1 font-medium transition-colors duration-300 ${
                scrolled ? 'text-brand-gold-dark' : 'text-brand-gold-light/85'
              }`}>
                Atelier Urapola
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={getLinkClass('/')}>
              Home
            </Link>

            <Link to="/about" className={getLinkClass('/about')}>
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative group/dropdown">
              <button onClick={() => setServicesOpen(!servicesOpen)} className={getServicesBtnClass()}>
                Services
                <ChevronDown className={`w-4 h-4 group-hover/dropdown:rotate-180 transition-transform duration-300 ${
                  scrolled ? 'text-brand-gold' : 'text-brand-gold-light'
                }`} />
              </button>

              <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-brand-ivory ring-1 ring-black ring-opacity-5 divide-y divide-brand-gold/10 opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all duration-300 transform origin-top-left z-50 animate-fade-in-up">
                <div className="py-1">
                  <Link
                    to="/services/custom-dresses"
                    className="block px-4 py-2 text-sm text-brand-charcoal hover:bg-brand-blush hover:text-brand-maroon transition-colors duration-150 font-semibold"
                  >
                    Custom Dresses
                  </Link>
                  <Link
                    to="/services/wedding-rentals"
                    className="block px-4 py-2 text-sm text-brand-charcoal hover:bg-brand-blush hover:text-brand-maroon transition-colors duration-150 font-semibold"
                  >
                    Wedding Dress Rentals
                  </Link>
                  <Link
                    to="/services/saree-couture"
                    className="block px-4 py-2 text-sm text-brand-charcoal hover:bg-brand-blush hover:text-brand-maroon transition-colors duration-150 font-semibold"
                  >
                    Saree Jackets & Made-up
                  </Link>
                  <Link
                    to="/services/bridal-occasion"
                    className="block px-4 py-2 text-sm text-brand-charcoal hover:bg-brand-blush hover:text-brand-maroon transition-colors duration-150 font-semibold"
                  >
                    Bridal & Homecoming Wear
                  </Link>
                  <Link
                    to="/services/school-uniforms"
                    className="block px-4 py-2 text-sm text-brand-charcoal hover:bg-brand-blush hover:text-brand-maroon transition-colors duration-150 font-semibold"
                  >
                    School Uniforms
                  </Link>
                  <Link
                    to="/services/other"
                    className="block px-4 py-2 text-sm text-brand-charcoal hover:bg-brand-blush hover:text-brand-maroon transition-colors duration-150 font-semibold"
                  >
                    Other Fashion Services
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/our-works" className={getLinkClass('/our-works')}>
              Our Works
            </Link>

            <Link to="/quote" className={getLinkClass('/quote')}>
              Get a Quote
            </Link>

            <Link to="/contact" className={getLinkClass('/contact')}>
              Contact
            </Link>
          </div>

          {/* Quick Consultation CTA */}
          <div className="hidden md:flex items-center">
            <Link
              to="/booking"
              className={`flex items-center gap-2 font-sans text-xs tracking-wider uppercase font-semibold py-2.5 px-5 rounded-md transition-all duration-300 shadow-md ${
                scrolled
                  ? 'bg-brand-maroon text-white hover:bg-brand-maroon-light shadow-brand-maroon/20 hover:shadow-lg hover:-translate-y-0.5'
                  : 'bg-brand-gold text-brand-maroon-dark hover:bg-brand-gold-light shadow-brand-gold/10 hover:shadow-lg hover:-translate-y-0.5'
              }`}
            >
              <PhoneCall className="w-3.5 h-3.5" />
              Book Consult
            </Link>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className={`p-2 focus:outline-none transition-colors duration-300 ${
                scrolled ? 'text-brand-maroon' : 'text-brand-gold'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100 border-b border-brand-gold/15 bg-brand-ivory' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          <Link
            to="/"
            className="block px-3 py-2 text-base font-semibold text-brand-charcoal hover:text-brand-maroon hover:bg-brand-blush rounded-md transition duration-150"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-3 py-2 text-base font-semibold text-brand-charcoal hover:text-brand-maroon hover:bg-brand-blush rounded-md transition duration-150"
          >
            About
          </Link>

          {/* Services Category Section */}
          <div className="px-3 py-2">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold-dark mb-1">
              Our Services
            </p>
            <div className="pl-3 space-y-1">
              <Link
                to="/services/custom-dresses"
                className="block py-1 text-sm text-brand-charcoal hover:text-brand-maroon transition duration-150"
              >
                Custom Dresses
              </Link>
              <Link
                to="/services/wedding-rentals"
                className="block py-1 text-sm text-brand-charcoal hover:text-brand-maroon transition duration-150"
              >
                Wedding Rentals
              </Link>
              <Link
                to="/services/saree-couture"
                className="block py-1 text-sm text-brand-charcoal hover:text-brand-maroon transition duration-150"
              >
                Saree Jackets & Made-up
              </Link>
              <Link
                to="/services/bridal-occasion"
                className="block py-1 text-sm text-brand-charcoal hover:text-brand-maroon transition duration-150"
              >
                Bridal & Homecoming Wear
              </Link>
              <Link
                to="/services/school-uniforms"
                className="block py-1 text-sm text-brand-charcoal hover:text-brand-maroon transition duration-150"
              >
                School Uniforms
              </Link>
              <Link
                to="/services/other"
                className="block py-1 text-sm text-brand-charcoal hover:text-brand-maroon transition duration-150"
              >
                Other Services
              </Link>
            </div>
          </div>

          <Link
            to="/our-works"
            className="block px-3 py-2 text-base font-semibold text-brand-charcoal hover:text-brand-maroon hover:bg-brand-blush rounded-md transition duration-150"
          >
            Our Works
          </Link>
          <Link
            to="/quote"
            className="block px-3 py-2 text-base font-semibold text-brand-charcoal hover:text-brand-maroon hover:bg-brand-blush rounded-md transition duration-150"
          >
            Get a Quote
          </Link>
          <Link
            to="/contact"
            className="block px-3 py-2 text-base font-semibold text-brand-charcoal hover:text-brand-maroon hover:bg-brand-blush rounded-md transition duration-150"
          >
            Contact
          </Link>

          <div className="pt-4 px-3">
            <Link
              to="/booking"
              className="w-full flex items-center justify-center gap-2 bg-brand-maroon text-white font-sans text-sm tracking-wider uppercase font-semibold py-3 px-4 rounded-md hover:bg-brand-maroon-light transition-all"
            >
              <PhoneCall className="w-4 h-4" />
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
