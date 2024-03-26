import Image from "next/image";

export default function OffersBanner() {
  return (
    <div className="w-full relative aspect-[12/4.5]">
      <Image
        src="https://placehold.co/1200x450/png"
        alt="Placeholder image"
        fill
        quality={100}
        className="object-contain"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII="
      ></Image>
    </div>
  );
}
