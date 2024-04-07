import CategoryList from "@/components/categories/CategoryList";
import PopularCategoriesSlider from "@/components/categories/PopularCategoriesSlider";
import Container from "@/components/Container";

export default function CategotiesPage() {
  return (
    <div className="px-4 py-6">
      <Container className="flex flex-col gap-4">
        <PopularCategoriesSlider />

        <CategoryList />
      </Container>
    </div>
  );
}
