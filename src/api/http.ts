import { QueryClient } from "@tanstack/react-query";

import { Api } from "./schemas";

const QUERY_CACHE_LIVE_TIME = 180000;

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: QUERY_CACHE_LIVE_TIME, retry: false },
  },
});

export let baseURL = import.meta.env.VITE_API_BASE_URL;

if (baseURL && baseURL[baseURL.length - 1] === "/") {
  baseURL = baseURL.slice(0, -1);
}

const http = new Api({
  baseURL,
  timeout: 60000,
  headers: { "Content-Type": "application/json" },
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
http.instance.interceptors.request.use((config): any => {
  if (config.headers != null && !config.headers["Authorization"]) {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken != null) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
  }
  return config;
});

export default http;
