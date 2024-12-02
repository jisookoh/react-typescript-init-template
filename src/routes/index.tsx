import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CommonLayout } from "@components/layout";
import mainRoutes from "./mainRoutes";
import aboutRoutes from "./aboutRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CommonLayout />, // 공통 레이아웃
    children: [mainRoutes, ...aboutRoutes],
  },
  // { path: "*", element: <NotFound /> }, // TODO: 잘못된 경로로 진입 시 not found 페이지
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
