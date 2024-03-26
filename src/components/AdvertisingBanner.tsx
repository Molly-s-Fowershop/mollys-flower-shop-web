import { cn } from "@/utils/cn";
import Image, { ImageProps } from "next/image";

type AdvertisingBannerProps = ImageProps & {
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
  ...props
}: AdvertisingBannerProps) {
  return (
    <div className={cn("w-full relative", className)}>
      <Image
        {...props}
        src={src}
        alt={alt}
        fill
        quality={100}
        className={cn("object-contain", imageClassName)}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII="
      ></Image>
    </div>
  );
}
