"use server";

import { LoginForm, LoginSchema } from "@/app/auth/lib/hooks/useLoginForm";
import {
  RegisterForm,
  RegisterSchema,
} from "@/app/auth/lib/hooks/useRegisterForm";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function register(payload: RegisterForm) {
  const result = RegisterSchema.safeParse(payload);

  if (!result.success) {
    throw new Error("Invalid payload");
  }

  const res = await fetch("http://localhost:3000/api/auth/register", {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  if (res.ok) {
    cookies().set("token", data.accessToken, {
      httpOnly: true,
    });
  }

  return { data, ok: res.ok };
}

export async function login(payload: LoginForm) {
  const result = LoginSchema.safeParse(payload);

  if (!result.success) {
    throw new Error("Invalid payload");
  }

  const res = await fetch("http://localhost:3000/api/auth/login", {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  if (res.ok) {
    cookies().set("token", data.accessToken, {
      httpOnly: true,
    });
  }

  return { data, ok: res.ok };
}

export async function validateAuth(req: NextRequest, tokenShouldExist = true) {
  const token = req.cookies.get("token")?.value;

  console.log("Validating auth token");

  if (!token) {
    if (tokenShouldExist) {
      return NextResponse.redirect(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`
      );
    }

    return NextResponse.next();
  }

  const res = await fetch("http://localhost:3000/api/auth/validate-token", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const nextRes = NextResponse.next();

  if (!res.ok) {
    nextRes.cookies.set("token", "");
  } else {
    nextRes.cookies.set("token", token);
  }

  return nextRes;
}

export async function logout() {
  cookies().set("token", "");
}
