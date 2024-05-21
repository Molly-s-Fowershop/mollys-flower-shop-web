/* eslint-disable react-refresh/only-export-components */
import { RouteObject } from "react-router";
import { SuspenseWrapper } from "@/shared/components/SuspenseWrapper";
import { lazy } from "react";
import AuthCheckMiddleware from "@/modules/auth/components/AuthCheckMiddleware";

const Checkout = lazy(() => import("@/modules/checkout/pages/Checkout"));

const checkoutRoutes: RouteObject[] = [
  {
    element: <AuthCheckMiddleware authShouldBe />,
    children: [
      {
        path: "/checkout",
        element: <SuspenseWrapper children={<Checkout />} />,
      },
    ],
  },
];

export default checkoutRoutes;
