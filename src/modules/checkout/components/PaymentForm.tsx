import React, { useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import Button from "@/shared/components/base/Button";
import { getErrorMessage } from "@/shared/utils/getErrorMessage";

export default function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState("");

  const backendUrl = import.meta.env.VITE_API_BASE_URL;

  const handlePayment = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (elements == null || stripe == null) {
      return;
    }

    const { error: submitError } = await elements.submit();
    if (submitError?.message) {
      setErrorMessage(submitError.message);
      return;
    }

    const price = 12;

    const res = await fetch(backendUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        currency: "usd",
        amount: price * 100,
        paymentMethodType: "card",
      }),
    });

    const { client_secret: clientSecret } = await res.json();

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `${window.location.origin}/success`,
      },
    });

    if (error) {
      setErrorMessage(getErrorMessage(error));
    } else {
      setErrorMessage("");
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handlePayment}>
      <h2 className="text-2xl">Payment method</h2>

      <PaymentElement />

      <Button>Pay and Place order</Button>

      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
}
