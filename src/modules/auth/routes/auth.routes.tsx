/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { RouteObject } from "react-router";
import { SuspenseWrapper } from "@/shared/components/SuspenseWrapper";

const Login = lazy(() => import("@/modules/auth/pages/Login"));
const Register = lazy(() => import("@/modules/auth/pages/Register"));

export const authRoutes: RouteObject[] = [
  {
    path: "/auth",
    children: [
      {
        path: "login",
        element: <SuspenseWrapper children={<Login />} />,
      },
      {
        path: "register",
        element: <SuspenseWrapper children={<Register />} />,
      },
    ],
  },
];
