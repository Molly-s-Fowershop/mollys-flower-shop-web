import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";
import Container from "@/shared/components/base/Container";

type Props = {
  amount: number;
};

const options: StripeElementsOptions = {
  mode: "payment",
  amount: 1099,
  currency: "usd",
  locale: "en",
  appearance: {
    theme: "stripe",
    variables: {
      borderRadius: "0px",
    },
    rules: {
      ".Input": {
        borderColor: "#1F2937",
        borderWidth: "2px",
      },
    },
  },
};

const CheckoutProvider = (props: Props) => {
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

  options.amount = props.amount;

  return (
    <Container className="px-0">
      <Elements stripe={stripePromise} options={options}>
        <PaymentForm />
      </Elements>
    </Container>
  );
};

export default CheckoutProvider;
