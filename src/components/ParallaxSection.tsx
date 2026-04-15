import { useEffect, useRef, useState } from "react";

interface ParallaxSectionProps {
  imageSrc: string;
  children: React.ReactNode;
  height?: string;
  overlay?: string;
}

export const ParallaxSection = ({
  imageSrc,
  children,
  height = "min-h-[400px]",
  overlay = "bg-foreground/60",
}: ParallaxSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // Only calculate when in view
      if (rect.bottom > 0 && rect.top < windowHeight) {
        const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
        setOffset((progress - 0.5) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={ref}
      className={`relative ${height} overflow-hidden flex items-center justify-center`}
    >
      <div
        className="absolute inset-0 w-full h-[130%] -top-[15%] bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: `url(${imageSrc})`,
          transform: `translate3d(0, ${offset * 0.5}px, 0)`,
        }}
      />
      <div className={`absolute inset-0 ${overlay}`} />
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
};
