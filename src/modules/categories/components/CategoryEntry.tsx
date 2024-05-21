import { Category } from "@/modules/categories/types/Category";
import InfoTooltip from "@/shared/components/util/InfoTooltip";

type CategoryEntryProps = {
  category: Category;
};

export default function CategoryEntry({ category }: CategoryEntryProps) {
  return (
    <div className="flex flex-col gap-3">
      <figure className="w-full max-w-full relative aspect-[2/1.25]">
        <img
          src="https://placehold.co/200x125/png"
          alt="Category image"
          className="object-contain w-full"
        />
      </figure>

      <section>
        <hr />
        <div className="flex items-center justify-between gap-4 mt-1">
          <h2 className="text-sm">{category.name}</h2>

          <InfoTooltip
            tooltipId={`category-${category.id}`}
            description={category.description}
            className="text-[20px] max-w-20"
          />
        </div>
      </section>
    </div>
  );
}
