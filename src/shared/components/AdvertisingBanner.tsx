import { cn } from "@/shared/utils/cn";

type AdvertisingBannerProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
};

export default function AdvertisingBanner({
  src,
  alt,
  className,
  imageClassName,
}: AdvertisingBannerProps) {
  return (
    <div className={cn("w-full relative", className)}>
      <img
        src={src}
        alt={alt}
        className={cn("w-full h-full", imageClassName)}
      />
    </div>
  );
}
