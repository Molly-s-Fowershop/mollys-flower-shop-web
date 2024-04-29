"use client";

import { useLoginForm } from "@/app/auth/lib/hooks/useLoginForm";
import LabelWrapper from "@/components/form/LabelWrapper";
import Link from "next/link";

export default function LoginForm() {
  const { register, handleSubmit, formState } = useLoginForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form onSubmit={onSubmit} className="auth-form">
      <h1 className="text-center text-3xl font-medium">Login form</h1>

      <LabelWrapper
        label="Email"
        error={formState.errors.email?.message}
        isRequired
      >
        <input autoComplete="on" className="input" {...register("email")} />
      </LabelWrapper>

      <LabelWrapper
        label="Password"
        error={formState.errors.password?.message}
        isRequired
      >
        <input
          type="password"
          autoComplete="on"
          className="input"
          {...register("password")}
        />
      </LabelWrapper>

      <button type="submit" className="submit">
        Login
      </button>

      <p className="text-sm font-light text-center">
        Don&apos;t have an account?{" "}
        <Link href="/auth/register" className="inline-anchor">
          Register
        </Link>
      </p>
    </form>
  );
}
