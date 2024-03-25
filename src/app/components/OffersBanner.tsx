import Image from "next/image";

export default function OffersBanner() {
  return (
    <div className="w-full relative aspect-[12/4]">
      <Image
        src="https://placehold.co/1200x400/png"
        alt="Placeholder image"
        fill
        className="object-contain"
      ></Image>
    </div>
  );
}
