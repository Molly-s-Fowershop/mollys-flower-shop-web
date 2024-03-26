import Container from "@/components/Container";
import OffersBanner from "@/components/OffersBanner";
import LatestProductsList from "@/components/products/LatestProductsSlider";

export default function Home() {
  return (
    <div>
      <OffersBanner />

      <Container className="py-6">
        <LatestProductsList />
      </Container>
    </div>
  );
}
