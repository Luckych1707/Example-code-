import { useQuery } from "@tanstack/react-query";
import { Link, Outlet, useChildMatches } from "@tanstack/react-router";
import { Button, Flex, Layout as AntdLayout, Menu, Spin } from "antd";
import { Suspense } from "react";

import { getMe } from "@/api/queries/getMe";
import { navConfig } from "@/constants/navConfig";
import SignIn from "@/routes/SignIn";

export const Layout = () => {
  const match = useChildMatches();

  const selectedMenuKey = `/${match[0].pathname.split("/")?.[1]}`;

  const { data, isLoading } = useQuery({
    ...getMe.getQueryOptions(),
    retry: false,
  });

  const isAuthorized = !!data?.result.id;

  const role = data?.result?.role?.role;

  if (isLoading) {
    return (
      <Flex justify="center" align="center" style={{ height: "100vh" }}>
        <Spin />
      </Flex>
    );
  }

  if (isAuthorized) {
    return <SignIn />;
  }

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    location.reload();
  };

  return (
    <AntdLayout
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        minHeight: "100vh",
      }}
    >
      <AntdLayout.Header>
        <Menu theme="dark" mode="horizontal" selectedKeys={[selectedMenuKey]}>
          {navConfig
            .filter((item) => !item.role || item.role.includes(role))
            .map((item) => (
              <Menu.Item key={item.link}>
                <Link to={item.link}>{item.title}</Link>
              </Menu.Item>
            ))}
          <Button
            style={{ position: "absolute", right: "20px", top: "15px" }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Menu>
      </AntdLayout.Header>

      <AntdLayout.Content style={{ flexGrow: 1 }}>
        <Suspense
          fallback={
            <Flex justify="center" align="center" style={{ height: "100%" }}>
              <Spin size="large" />
            </Flex>
          }
        >
          <Outlet />
        </Suspense>
      </AntdLayout.Content>
    </AntdLayout>
  );
};
