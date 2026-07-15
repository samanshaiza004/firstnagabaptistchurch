import { createBrowserRouter } from "react-router";
import Layout from './components/Layout';
import { PageLoading } from "./components/PageLoading";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    hydrateFallbackElement: <PageLoading />,
    children: [
      {
        index: true,
        lazy: async () => ({
          Component: (await import("./home/Home")).default,
        }),
      },
      {
        path: "about",
        lazy: async () => ({
          Component: (await import("./about/About")).default,
        }),
      },
      {
        path: "events",
        lazy: async () => ({
          Component: (await import("./events/events")).default,
        }),
      },
      {
        path: "give",
        lazy: async () => ({
          Component: (await import("./give/Give")).default,
        }),
      },
      {
        path: "contact",
        lazy: async () => ({
          Component: (await import("./contact/Contact")).default,
        }),
      },
      {
        path: "*",
        lazy: async () => ({
          Component: (await import("./components/NotFound")).default,
        }),
      },
    ],
  },
]);

export default router;
