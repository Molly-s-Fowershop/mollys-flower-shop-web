"use client";

import useEmblaCarousel from "embla-carousel-react";

type CarouselWrapperProps = {
  children: React.ReactNode;
};

export default function CarouselWrapper({ children }: CarouselWrapperProps) {
  const [emblaRef] = useEmblaCarousel({
    axis: "x",
    active: true,
    direction: "rtl",
    loop: true,
  });

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla_container">{children}</div>
    </div>
  );
}
