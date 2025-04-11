
import { ReactNode } from 'react';

interface HeroBannerProps {
  title: string;
  subtitle?: string;
  backgroundClass?: string;
  children?: ReactNode;
}

const HeroBanner = ({ 
  title, 
  subtitle, 
  backgroundClass = "bg-hero-pattern", 
  children 
}: HeroBannerProps) => {
  return (
    <div className={`${backgroundClass} py-20 md:py-32 text-white`}>
      <div className="container-custom">
        <div className="max-w-3xl">
          <h1 className="mb-4 animate-fade-in">{title}</h1>
          {subtitle && (
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-slide-in">{subtitle}</p>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
