import { EmblaCarousel } from "./";
import { EmblaOptionsType } from "embla-carousel";
import { cn } from "@/shared/utils/cn";

const defaultOptions: EmblaOptionsType = {
  align: "center",
  loop: true,
};

type CarouselProps = {
  children: React.ReactNode;
  title?: string;
  className?: string;
  options?: EmblaOptionsType;
  controls?: boolean;
};

export default function Carousel({
  children,
  title,
  className,
  options = {},
  controls = true,
}: CarouselProps) {
  const emblaOptions = { ...defaultOptions, ...options };

  return (
    <div className={cn("flex flex-col gap-4 max-w-full", className)}>
      {title && <h1 className="text-xl">{title}</h1>}

      <EmblaCarousel options={emblaOptions} controls={controls}>
        {children}
      </EmblaCarousel>
    </div>
  );
}
