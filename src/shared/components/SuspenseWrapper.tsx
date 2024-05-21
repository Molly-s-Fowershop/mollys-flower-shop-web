import { Suspense } from "react";
import LoadingOverlay from "@/shared/components/LoadingOverlay";

type SuspenseWrapperProps = {
  children: React.ReactNode;
  loading?: React.ReactNode;
};

export const SuspenseWrapper = ({
  children,
  loading,
}: SuspenseWrapperProps) => {
  return (
    <Suspense fallback={loading ?? <LoadingOverlay />}>{children}</Suspense>
  );
};
