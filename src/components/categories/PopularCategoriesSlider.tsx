import { Category, ListResponse } from "@/types";
import { Carousel, EmblaSlide } from "@/components/embla";
import CategroySlideEntry from "./CategorySlideEntry";

async function fetchPopularCategories() {
  const response = await fetch("http://localhost:3000/api/categories");

  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

  return response.json() as Promise<ListResponse<Category>>;
}

export default async function PopularCategoriesSlider() {
  const { data } = await fetchPopularCategories();

  return (
    <div>
      <Carousel title="Popular Categories" controls={false}>
        {data.map((category) => (
          <EmblaSlide key={category.id}>
            <CategroySlideEntry category={category} />
          </EmblaSlide>
        ))}
      </Carousel>
    </div>
  );
}
