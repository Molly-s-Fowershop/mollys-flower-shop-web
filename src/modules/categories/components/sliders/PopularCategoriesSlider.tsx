import { Carousel, EmblaSlide } from "@/shared/components/embla";
import CategroySlideEntry from "./CategorySlideEntry";
import { Link } from "react-router-dom";
import { useCategories } from "@/modules/categories/hooks/useCategories";

export default function PopularCategoriesSlider() {
  const { response } = useCategories();

  if (!response) {
    return null;
  }

  const { data } = response;

  return (
    <div>
      <Carousel title="Popular Categories" controls={false}>
        {data.map((category) => (
          <EmblaSlide key={category.id}>
            <Link to={`/categories/${category.id}/products`}>
              <CategroySlideEntry category={category} />
            </Link>
          </EmblaSlide>
        ))}
      </Carousel>
    </div>
  );
}
