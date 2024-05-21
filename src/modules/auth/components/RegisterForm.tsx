import { toast } from "sonner";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useRegisterForm } from "@/modules/auth/hooks/useRegisterForm";
import LabelWrapper from "@/shared/components/form/LabelWrapper";
import { getErrorMessage } from "@/shared/utils/getErrorMessage";
import { useAuth } from "@/modules/auth/hooks/useAuth";

export default function RegisterForm() {
  const { register, formState, handleSubmit } = useRegisterForm();
  const { registerAsync } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = handleSubmit(async (payload) => {
    try {
      await registerAsync(payload);
      toast.success("You have successfully registered!");
      navigate(from);
    } catch (err) {
      const errorMessage = getErrorMessage(err);
      toast.error(errorMessage);
    }
  });

  return (
    <form onSubmit={onSubmit} className="auth-form">
      <h1 className="text-center text-3xl font-medium">
        Create your new account
      </h1>

      <LabelWrapper
        label="Email"
        error={formState.errors.email?.message}
        isRequired
      >
        <input autoComplete="on" className="input" {...register("email")} />
      </LabelWrapper>

      <LabelWrapper
        label="Name"
        error={formState.errors.name?.message}
        isRequired
      >
        <input autoComplete="on" className="input" {...register("name")} />
      </LabelWrapper>

      <LabelWrapper
        label="Lastname"
        error={formState.errors.lastname?.message}
        isRequired
      >
        <input autoComplete="on" className="input" {...register("lastname")} />
      </LabelWrapper>

      <LabelWrapper
        label="Phone"
        error={formState.errors.phone?.message}
        isRequired
      >
        <input autoComplete="on" className="input" {...register("phone")} />
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
        Register
      </button>

      <p className="text-sm font-light text-center">
        Already have an account?{" "}
        <Link to="/auth/login" className="inline-anchor">
          Login
        </Link>
      </p>
    </form>
  );
}
