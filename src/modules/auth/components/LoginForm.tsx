import { toast } from "sonner";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useLoginForm } from "@/modules/auth/hooks/useLoginForm";
import LabelWrapper from "@/shared/components/form/LabelWrapper";
import { useAuth } from "@/modules/auth/hooks/useAuth";
import { getErrorMessage } from "@/shared/utils/getErrorMessage";

export default function LoginForm() {
  const { loginAsync } = useAuth();
  const { register, handleSubmit, formState } = useLoginForm();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = handleSubmit(async (payload) => {
    try {
      await loginAsync(payload);
      toast.success("You have successfully registered!");
      navigate(from);
    } catch (err) {
      const errorMessage = getErrorMessage(err);
      toast.error(errorMessage);
    }
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
        <Link to="/auth/register" className="inline-anchor">
          Register
        </Link>
      </p>
    </form>
  );
}
