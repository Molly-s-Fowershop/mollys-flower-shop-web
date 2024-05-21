"use server";

import { Cart } from "@/types/Cart";
import { cookies } from "next/headers";

export async function getUserCart() {
  const res = await fetch("http://localhost:3000/api/carts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookies().get("token")?.value}`,
    },
    cache: "no-cache",
  });

  const data = (await res.json()) as Cart;

  return {
    data,
    ok: res.ok,
  };
}
