import { useEffect, useRef, ReactNode } from 'react';

interface ParallaxSectionProps {
  backgroundImage: string;
  children: ReactNode;
  className?: string;
  id?: string;
}

const ParallaxSection = ({ backgroundImage, children, className = '', id }: ParallaxSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current && sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        const yPos = scrollPercent * 30;
        bgRef.current.style.transform = `translateY(${yPos}%)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} id={id} className={`relative overflow-hidden ${className}`}>
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%] bg-cover bg-center transition-transform duration-100 ease-out"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative z-10">{children}</div>
    </section>
  );
};

export default ParallaxSection;
