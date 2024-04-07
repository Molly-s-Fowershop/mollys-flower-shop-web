import { Category } from "@/types";
import Image from "next/image";

type CategoryEntryProps = {
  category: Category;
};

export default function CategoryEntry({ category }: CategoryEntryProps) {
  return (
    <div className="flex flex-col gap-3">
      <figure className="w-full max-w-full relative aspect-[2/1.5]">
        <Image
          src="https://placehold.co/200x150/png"
          alt="Category image"
          className="object-contain"
          fill
          quality={100}
          sizes="(max-width: 300px) 300px, (max-width: 1200px) 350px"
        />
      </figure>

      <section>
        <hr />
        <div className="flex items-center justify-between gap-4 mt-1">
          <h2 className="">{category.name}</h2>

          <span className="material-symbols-outlined text-gray-600 hover:cursor-default">
            info
          </span>
        </div>
      </section>
    </div>
  );
}
