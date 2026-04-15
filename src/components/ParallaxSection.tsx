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
  return (
    <div
      className={`relative ${height} overflow-hidden flex items-center justify-center`}
    >
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${imageSrc})` }}
      />
      <div className={`absolute inset-0 ${overlay}`} />
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
};
