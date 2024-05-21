import { Navigate, Outlet, useLocation } from "react-router-dom";
import LoadingOverlay from "@/shared/components/LoadingOverlay";
import { useValidateAuth } from "@/modules/auth/hooks/useValidateAuth";
import { useAppSelector } from "@/shared/hooks/storeHooks";

const loginPath = "/auth/login";

type AuthCheckMiddlewareProps = {
  authShouldBe: boolean;
};

export default function AuthCheckMiddleware({
  authShouldBe,
}: AuthCheckMiddlewareProps) {
  const location = useLocation();
  const from = location.state?.from?.pathname || undefined;
  const { isLoading } = useValidateAuth();
  const to = authShouldBe ? loginPath : from || "/";
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  return isLoading ? (
    <LoadingOverlay className="backdrop-blur-sm" />
  ) : isAuthenticated === authShouldBe ? (
    <Outlet />
  ) : (
    <Navigate
      to={to}
      state={{ from: authShouldBe ? location : from }}
      replace
    />
  );
}
