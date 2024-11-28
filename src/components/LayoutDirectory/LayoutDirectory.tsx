import { Link, Outlet, useMatches, useNavigate } from "@tanstack/react-router";
import { Flex, Layout as AntdLayout, Menu, Spin } from "antd";
import { Suspense, useEffect } from "react";

import { navConfigDirectory } from "@/constants/navConfigDirectory";

export const LayoutDirectory = () => {
  const match = useMatches();

  const navigate = useNavigate({ from: "/directory" });

  useEffect(() => {
    if (match.length === 2) {
      navigate({ to: "/directory/countries" }).then();
    }
  }, [match.length, navigate]);

  return (
    <AntdLayout
      style={{ display: "flex", flexDirection: "column", height: "100%" }}
    >
      <AntdLayout.Header style={{ padding: "0" }}>
        <Menu
          style={{ padding: "0 50px" }}
          mode="horizontal"
          selectedKeys={[`${match[2] && match[2].pathname}`]}
        >
          {navConfigDirectory.map((item) => (
            <Menu.Item key={item.link}>
              <Link to={item.link}>{item.title}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </AntdLayout.Header>
      <AntdLayout.Content>
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
