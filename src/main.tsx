import React from "react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import theme from "./theme.ts";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* UI by Chakra - Color(Light/Dark) configuration */}
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      {/* React Query Configuration including setting React Query Devtools› */}
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        {/* Routing configuration by react-router-dom */}
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);
