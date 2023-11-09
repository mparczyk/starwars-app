import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App/App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GlobalStyles } from "./styles/styles";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <GlobalStyles />
    </QueryClientProvider>
  </React.StrictMode>
);
