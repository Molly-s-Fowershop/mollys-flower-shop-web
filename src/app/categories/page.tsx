import CategoryList from "@/components/categories/CategoryList";
import PopularCategoriesSlider from "@/components/categories/PopularCategoriesSlider";
import Container from "@/components/Container";

export default function CategotiesPage() {
  return (
    <Container className="px-4 py-6">
      <div className="flex flex-col gap-4">
        <PopularCategoriesSlider />

        <CategoryList />
      </div>
    </Container>
  );
}
