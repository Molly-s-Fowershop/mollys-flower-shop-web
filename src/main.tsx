import "@/assets/css/index.css";
import "@/assets/css/embla.css";

import ReactDOM from "react-dom/client";
import AppRouterProvider from "@/plugins/router.tsx";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/plugins/QueryClient";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import StoreProvider from "./plugins/StoreProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <StoreProvider>
      <AppRouterProvider />
    </StoreProvider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
