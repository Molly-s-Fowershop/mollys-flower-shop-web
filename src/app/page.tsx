import Container from "@/components/Container";
import OffersBanner from "./components/OffersBanner";

export default function Home() {
  return (
    <div>
      <OffersBanner />

      <Container>
        <h1>Home</h1>
      </Container>
    </div>
  );
}
