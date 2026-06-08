
interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function PageHeader({ title, subtitle, className = '' }: PageHeaderProps) {
  return (
    <div className={`relative bg-brand-maroon text-white pt-32 pb-16 px-4 text-center overflow-hidden border-b border-brand-gold/20 ${className}`}>
      {/* Decorative Gold Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-50%] left-[-20%] w-[60%] h-[150%] rounded-full bg-brand-gold filter blur-[120px]"></div>
        <div className="absolute bottom-[-50%] right-[-20%] w-[60%] h-[150%] rounded-full bg-brand-gold filter blur-[120px]"></div>
      </div>
      
      <div className="relative max-w-4xl mx-auto z-10 animate-fade-in-up">
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-wide mb-4 text-brand-gold">
          {title}
        </h1>
        {subtitle && (
          <p className="font-sans text-sm sm:text-base text-brand-ivory/80 tracking-widest uppercase font-medium max-w-2xl mx-auto leading-relaxed border-t border-brand-gold/20 pt-4">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
