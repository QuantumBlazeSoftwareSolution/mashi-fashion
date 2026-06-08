
interface FloatingWhatsAppProps {
  phoneNumber?: string; // Sri Lankan number without '+' e.g. 94771234567
  defaultMessage?: string;
}

export default function FloatingWhatsApp({
  phoneNumber = '94711612290', // Business WhatsApp hotline
  defaultMessage = 'Hello Mashi Fashion! I would like to inquire about your custom dresses & design services.'
}: FloatingWhatsAppProps) {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20ba59] transition-all duration-300 transform hover:scale-110 group"
      aria-label="Chat on WhatsApp"
      id="whatsapp-floating-trigger"
    >
      {/* WhatsApp SVG Icon */}
      <svg
        className="w-7 h-7"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 1.977 14.053.953 11.432.953c-5.44 0-9.866 4.372-9.87 9.802 0 1.764.476 3.49 1.38 5.02L1.993 21.8l6.197-1.619 group-hover:rotate-12 transition-transform duration-300" />
      </svg>
      
      {/* Tooltip */}
      <span className="absolute right-16 bg-brand-charcoal text-brand-ivory text-xs font-semibold py-2 px-3 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md pointer-events-none border border-brand-gold/20">
        Chat with Mashi
      </span>
    </a>
  );
}
