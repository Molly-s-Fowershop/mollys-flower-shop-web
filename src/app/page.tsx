import Container from "@/components/Container";
import AdvertisingBanner from "@/components/AdvertisingBanner";
import LatestProductsSlider from "@/components/products/LatestProductsSlider";
import PopularProductsSlider from "@/components/products/PopularProductsSlider";

export default function Home() {
  return (
    <div>
      <AdvertisingBanner
        className="aspect-[12/4.5]"
        src="https://placehold.co/1200x450/png"
        alt="Banner"
      />
      <Container className="my-6">
        <LatestProductsSlider />
      </Container>

      <AdvertisingBanner
        className="aspect-[12/4]"
        src="https://placehold.co/1200x400/png"
        alt="Banner"
      />

      {/* <Container className="my-6">
        <PopularProductsSlider />
      </Container> */}
    </div>
  );
}
