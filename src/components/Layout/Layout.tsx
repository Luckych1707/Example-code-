import { LoginOutlined } from "@ant-design/icons";
import { Link, Outlet, useChildMatches } from "@tanstack/react-router";
import {
  Button,
  Flex,
  Layout as AntdLayout,
  Menu,
  Space,
  Spin,
  Typography,
} from "antd";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";

import { navConfig } from "@/constants/navConfig";
import SignIn from "@/routes/SignIn";

export const Layout = () => {
  const { t } = useTranslation("glossary");

  const match = useChildMatches();

  const selectedMenuKey = `/${match[0]?.pathname.split("/")?.[1]}`;

  const isAuthorized = false;

  if (!isAuthorized) {
    return <SignIn />;
  }

  return (
    <AntdLayout>
      <AntdLayout.Sider
        style={{ height: "100%", minHeight: "100vh" }}
        breakpoint="lg"
        width="280px"
      >
        <Flex style={{ padding: "24px 18px 18px 28px" }}>
          <Typography.Text style={{ color: "#FFFFFF" }}>
            {t("mainTitle")}
          </Typography.Text>
        </Flex>

        <Menu theme="dark" mode={"vertical"} selectedKeys={[selectedMenuKey]}>
          {navConfig.map((item) => (
            <Menu.Item key={item.link}>
              <Space>
                {item.icons}
                <Link to={item.link}>{item.title}</Link>
              </Space>
            </Menu.Item>
          ))}
        </Menu>
      </AntdLayout.Sider>

      <AntdLayout>
        <AntdLayout.Header
          style={{
            backgroundColor: "#FFFFFF",
            height: "72px",
          }}
        >
          <Flex
            justify="space-between"
            align="center"
            style={{ padding: "20px 64px" }}
          >
            <Typography.Title level={3} style={{ margin: 0 }}>
              {
                navConfig.filter((item) => item.link === selectedMenuKey)[0]
                  ?.title
              }
            </Typography.Title>
            <Flex align="center" gap="16px">
              <Typography.Text>example@email.com</Typography.Text>
              <Button
                icon={<LoginOutlined />}
                type="text"
                style={{ color: "#F5222D" }}
              />
            </Flex>
          </Flex>
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
    </AntdLayout>
  );
};
