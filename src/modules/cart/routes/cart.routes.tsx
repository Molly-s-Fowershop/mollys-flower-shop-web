/* eslint-disable react-refresh/only-export-components */
import AuthCheckMiddleware from "@/modules/auth/components/AuthCheckMiddleware";
import { SuspenseWrapper } from "@/shared/components/SuspenseWrapper";
import { lazy } from "react";
import { RouteObject } from "react-router";

const Cart = lazy(() => import("@/modules/cart/pages/Cart"));

const cartRoutes: RouteObject[] = [
  {
    element: <AuthCheckMiddleware authShouldBe={true} />,
    children: [
      {
        path: "/cart",
        element: <SuspenseWrapper children={<Cart />} />,
      },
    ],
  },
];

export default cartRoutes;
