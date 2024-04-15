import Container from "@/components/Container";
import AdvertisingBanner from "@/components/AdvertisingBanner";
import LatestProductsSlider from "@/components/products/LatestProductsSlider";
import PopularProductsSlider from "@/components/products/PopularProductsSlider";

export default function Home() {
  return (
    <div>
      <AdvertisingBanner
        className="aspect-[12/4]"
        imageClassName="object-cover"
        src="https://images.pexels.com/photos/5976825/pexels-photo-5976825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Banner"
      />
      <Container className="my-6 px-4">
        <LatestProductsSlider />
      </Container>

      <AdvertisingBanner
        className="aspect-[12/4]"
        src="https://placehold.co/1200x400/png"
        alt="Banner"
      />

      <Container className="my-6 px-4">
        <PopularProductsSlider />
      </Container>
    </div>
  );
}
