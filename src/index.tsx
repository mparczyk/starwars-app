import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import deDE from "antd/es/locale/de_DE";
import enUS from "antd/es/locale/en_US";

import { App } from "./App/App";
import { GlobalStyles } from "./styles/styles";
import { ConfigProvider } from "antd";
import { Language } from "./i18n/lang";
import i18n from "./i18n/i18n";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ConfigProvider
        locale={i18n.resolvedLanguage === Language.DE ? deDE : enUS}
      >
        <App />
        <GlobalStyles />
        <ReactQueryDevtools initialIsOpen={false} />
      </ConfigProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
