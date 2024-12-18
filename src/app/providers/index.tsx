import "dayjs/locale/ru";

import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";
import { Flex, Spin } from "antd";
import dayjs from "dayjs";
import { Suspense } from "react";

import { router } from "@/app/providers/RouterProvider";
import { queryClient } from "@/shared/api/http";

const Providers = () => {
  dayjs.locale("ru");
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense
        fallback={
          <Flex justify="center" align="center" style={{ height: "100vh" }}>
            <Spin size="large" />
          </Flex>
        }
      >
        <RouterProvider router={router} />
      </Suspense>
    </QueryClientProvider>
  );
};

export default Providers;
