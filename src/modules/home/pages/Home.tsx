import Container from "@/shared/components/base/Container";
import AdvertisingBanner from "@/shared/components/AdvertisingBanner";
import LatestProductsSlider from "@/modules/products/components/sliders/LatestProductsSlider";
import PopularProductsSlider from "@/modules/products/components/sliders/PopularProductsSlider";

export default function Home() {
  return (
    <div>
      <AdvertisingBanner
        className="aspect-[12/4]"
        imageClassName="object-cover"
        src="https://images.pexels.com/photos/5976825/pexels-photo-5976825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Banner"
      />
      <Container className="my-6">
        <LatestProductsSlider />
      </Container>

      <AdvertisingBanner
        className="aspect-[12/4]"
        imageClassName="object-cover"
        src="https://images.pexels.com/photos/2388257/pexels-photo-2388257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Banner"
      />

      <Container className="my-6">
        <PopularProductsSlider />
      </Container>
    </div>
  );
}
