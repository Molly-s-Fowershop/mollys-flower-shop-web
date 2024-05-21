import CategoryList from "@/modules/categories/components/CategoryList";
import PopularCategoriesSlider from "@/modules/categories/components/sliders/PopularCategoriesSlider";
import Container from "@/shared/components/base/Container";

export default function Categoties() {
  return (
    <Container className="px-4 py-6">
      <div className="flex flex-col gap-4">
        <PopularCategoriesSlider />

        <CategoryList />
      </div>
    </Container>
  );
}
