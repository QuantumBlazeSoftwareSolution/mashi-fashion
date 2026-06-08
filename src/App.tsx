import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

// Import Pages
import Home from './pages/Home';
import About from './pages/About';
import OurWorks from './pages/OurWorks';
import Quote from './pages/Quote';
import Booking from './pages/Booking';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

// Import Services Sub-pages
import CustomDresses from './pages/Services/CustomDresses';
import WeddingRentals from './pages/Services/WeddingRentals';
import SareeCouture from './pages/Services/SareeCouture';
import BridalOccasion from './pages/Services/BridalOccasion';
import SchoolUniforms from './pages/Services/SchoolUniforms';
import OtherServices from './pages/Services/OtherServices';

// Scroll to Top helper on route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-brand-ivory text-brand-charcoal font-sans selection:bg-brand-gold/30 selection:text-brand-maroon">
        
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/our-works" element={<OurWorks />} />
            <Route path="/portfolio" element={<OurWorks />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            
            {/* Services Group */}
            <Route path="/services/custom-dresses" element={<CustomDresses />} />
            <Route path="/services/wedding-rentals" element={<WeddingRentals />} />
            <Route path="/services/saree-couture" element={<SareeCouture />} />
            <Route path="/services/bridal-occasion" element={<BridalOccasion />} />
            <Route path="/services/school-uniforms" element={<SchoolUniforms />} />
            <Route path="/services/other" element={<OtherServices />} />
            
            {/* Fallback Catch-all Route */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating WhatsApp Widget */}
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}
