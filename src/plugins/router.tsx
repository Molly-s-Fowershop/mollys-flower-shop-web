import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { SuspenseWrapper } from "@/shared/components/SuspenseWrapper";
import RootLayout from "@/layouts/RootLayout";
import productRoutes from "@/modules/products/routes/product.routes";
import categoryRoutes from "@/modules/categories/routes/category.routes";
import cartRoutes from "@/modules/cart/routes/cart.routes";
import { authRoutes } from "@/modules/auth/routes/auth.routes";
import AuthCheckMiddleware from "@/modules/auth/components/AuthCheckMiddleware";
import checkoutRoutes from "@/modules/checkout/routes/checkout.routes";

const Home = lazy(() => import("@/modules/home/pages/Home"));
const NotFound = lazy(() => import("@/shared/pages/404"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <SuspenseWrapper children={<Home />} />,
      },

      {
        element: <AuthCheckMiddleware authShouldBe={false} />,
        children: [...authRoutes],
      },

      ...productRoutes,
      ...categoryRoutes,
      ...cartRoutes,
      ...checkoutRoutes,

      {
        path: "*",
        element: <SuspenseWrapper children={<NotFound />} />,
      },
    ],
  },
]);

export default function AppRouterProvider() {
  return <RouterProvider router={router} />;
}
