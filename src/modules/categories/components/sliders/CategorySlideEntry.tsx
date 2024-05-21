import { Category } from "@/modules/categories/types/Category";

type CategorySlideEntryProps = {
  category: Category;
};

export default function CategroySlideEntry({
  category,
}: CategorySlideEntryProps) {
  return (
    <div className="w-960 h-40 flex items-center text-center justify-center bg-[url('https://placehold.co/150x200/png')] bg-center bg-cover bg-no-repeat">
      <h2 className="px-4">{category.name}</h2>
    </div>
  );
}
