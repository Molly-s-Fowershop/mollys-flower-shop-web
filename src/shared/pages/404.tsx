import Container from "@/shared/components/base/Container";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Container className="my-8 mt-24">
      <div className="grid gap-8 mx-auto max-w-lg w-full border-2 border-gray-800 p-6 text-center">
        <h1 className="text-3xl font-medium ">404 - Not Found</h1>

        <p className="max-w-sm mx-auto">
          Sorry, the page or resource you are looking for does not exist.
        </p>

        <Link
          to="/"
          className="border-2 border-gray-800 w-fit mx-auto px-2 py-1"
        >
          Go to Home
        </Link>
      </div>
    </Container>
  );
}
