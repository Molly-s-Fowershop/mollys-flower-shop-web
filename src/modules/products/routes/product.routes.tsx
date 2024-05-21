/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { RouteObject } from "react-router";
import { SuspenseWrapper } from "@/shared/components/SuspenseWrapper";

const ProductDetails = lazy(
  () => import("@/modules/products/pages/ProductDetails")
);

const productRoutes: RouteObject[] = [
  {
    path: "/products/:id",
    element: <SuspenseWrapper children={<ProductDetails />} />,
  },
];

export default productRoutes;
