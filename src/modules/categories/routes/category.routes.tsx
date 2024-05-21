/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { RouteObject } from "react-router";
import { SuspenseWrapper } from "@/shared/components/SuspenseWrapper";

const Categories = lazy(() => import("@/modules/categories/pages/Categories"));
const CategoryProducts = lazy(
  () => import("@/modules/categories/pages/CategoryProducts")
);

const categoryRoutes: RouteObject[] = [
  {
    path: "/categories",
    children: [
      {
        index: true,
        element: <SuspenseWrapper children={<Categories />} />,
      },
      {
        path: ":id/products",
        element: <SuspenseWrapper children={<CategoryProducts />} />,
      },
    ],
  },
];

export default categoryRoutes;
