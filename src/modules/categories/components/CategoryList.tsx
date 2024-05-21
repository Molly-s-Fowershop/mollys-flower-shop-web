import { Link } from "react-router-dom";
import CategoryEntry from "./CategoryEntry";
import { useCategories } from "@/modules/categories/hooks/useCategories";

export default function CategoryList() {
  const { response } = useCategories();

  if (!response) {
    return null;
  }

  const { data } = response;

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-lg">Categories</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data.map((category) => (
          <Link to={`/categories/${category.id}/products`} key={category.id}>
            <CategoryEntry category={category} />
          </Link>
        ))}
      </div>
    </div>
  );
}
