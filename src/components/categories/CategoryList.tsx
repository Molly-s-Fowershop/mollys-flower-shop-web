import { Category, ListResponse } from "@/types";
import CategoryEntry from "./CategoryEntry";
import Link from "next/link";

async function fetchCategories() {
  const response = await fetch("http://localhost:3000/api/categories");

  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

  return response.json() as Promise<ListResponse<Category>>;
}

export default async function CategoryList() {
  const { data } = await fetchCategories();

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-lg">Categories</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data.map((category) => (
          <Link href={`/categories/${category.id}/products`} key={category.id}>
            <CategoryEntry category={category} />
          </Link>
        ))}
      </div>
    </div>
  );
}
