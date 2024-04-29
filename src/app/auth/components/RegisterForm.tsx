"use client";

import Link from "next/link";
import { useRegisterForm } from "../lib/hooks/useRegisterForm";
import LabelWrapper from "@/components/form/LabelWrapper";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useRegisterForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form onSubmit={onSubmit} className="auth-form">
      <h1 className="text-center text-3xl font-medium">
        Create your new account
      </h1>

      <LabelWrapper label="Email" error={errors.email?.message} isRequired>
        <input autoComplete="on" className="input" {...register("email")} />
      </LabelWrapper>

      <LabelWrapper label="Name" error={errors.name?.message} isRequired>
        <input autoComplete="on" className="input" {...register("name")} />
      </LabelWrapper>

      <LabelWrapper
        label="Lastname"
        error={errors.lastname?.message}
        isRequired
      >
        <input autoComplete="on" className="input" {...register("lastname")} />
      </LabelWrapper>

      <LabelWrapper label="Phone" error={errors.phone?.message} isRequired>
        <input autoComplete="on" className="input" {...register("phone")} />
      </LabelWrapper>

      <LabelWrapper
        label="Password"
        error={errors.password?.message}
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
        Register
      </button>

      <p className="text-sm font-light text-center">
        Already have an account?{" "}
        <Link href="/auth/login" className="inline-anchor">
          Login
        </Link>
      </p>
    </form>
  );
}
