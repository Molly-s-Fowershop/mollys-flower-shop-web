"use server";

import { CartItem } from "@/types/Cart";
import { cookies } from "next/headers";

export async function addItemToCart(payload: {
  productId: number;
  quantity: number;
}) {
  try {
    const res = await fetch("http://localhost:3000/api/carts/cart-items", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookies().get("token")?.value}`,
      },
    });

    const data = (await res.json()) as CartItem;

    return {
      data,
      ok: res.ok,
    };
  } catch (err) {
    return {
      error: err,
      ok: false,
    };
  }
}
