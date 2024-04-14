import { Category } from "@/types";

type CategorySlideEntryProps = {
  category: Category;
};

export default function CategroySlideEntry({
  category,
}: CategorySlideEntryProps) {
  return (
    <div className="w-960 h-40 flex items-center justify-center bg-[url('https://placehold.co/150x200/png')] bg-center bg-cover bg-no-repeat">
      <h2>{category.name}</h2>
    </div>
  );
}
