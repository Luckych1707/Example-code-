import { QueryClient } from "@tanstack/react-query";

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
