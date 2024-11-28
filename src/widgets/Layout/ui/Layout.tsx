import { ArrowLeftOutlined, LoginOutlined } from "@ant-design/icons";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  Link,
  Outlet,
  useChildMatches,
  useRouter,
} from "@tanstack/react-router";
import {
  Button,
  Flex,
  Layout as AntdLayout,
  Menu,
  Space,
  Spin,
  Typography,
} from "antd";
import { Suspense, useEffect } from "react";
import { useTranslation } from "react-i18next";

import SignIn from "@/pages/SignIn";
import { refreshToken } from "@/shared/api/handBooks/mutation/refreshToken";
import { getMe } from "@/shared/api/handBooks/queries/getMe";
import { navConfig } from "@/shared/constants/navConfig";

const tokenUpdateTime = 90000;

export const Layout = () => {
  const { t } = useTranslation("glossary");

  const router = useRouter();

  const match = useChildMatches();

  const selectedMenuKey = `/${match[0]?.pathname.split("/")?.[1]}`;

  const onBack = () => router.history.back();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    location.reload();
  };

  const { data, isLoading } = useQuery({
    ...getMe.getQueryOptions(),
  });

  const refreshMutation = useMutation({
    ...refreshToken.getMutationOptions(),
    onSuccess: async (response) => {
      localStorage.setItem("accessToken", response?.accessToken || "");
      localStorage.setItem("refreshToken", response?.refreshToken || "");
    },
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!localStorage.getItem("refreshToken")) {
        return;
      }

      refreshMutation.mutate(localStorage.getItem("refreshToken") || "");
    }, tokenUpdateTime);

    return () => {
      clearInterval(intervalId);
    };
  }, [refreshMutation]);

  if (isLoading) {
    return (
      <Flex justify="center" align="center" style={{ height: "100vh" }}>
        <Spin />
      </Flex>
    );
  }

  if (data) {
    return <SignIn />;
  }

  return (
    <AntdLayout>
      <AntdLayout.Sider
        style={{ minHeight: "100vh" }}
        breakpoint="lg"
        width="280px"
      >
        <Flex style={{ padding: "24px 18px 18px 28px" }}>
          <Typography.Text style={{ color: "#FFFFFF" }}>
            {t("mainTitle")}
          </Typography.Text>
        </Flex>

        <Menu theme="dark" mode={"vertical"} selectedKeys={[selectedMenuKey]}>
          {navConfig.map((item) => {
            return (
              item.show && (
                <Menu.Item key={item.link}>
                  <Space>
                    {item.icons}
                    <Link to={item.link}>{item.title}</Link>
                  </Space>
                </Menu.Item>
              )
            );
          })}
        </Menu>
      </AntdLayout.Sider>

      <AntdLayout>
        <AntdLayout.Header
          style={{
            backgroundColor: "#FFFFFF",
            height: "72px",
            padding: "0 64px",
          }}
        >
          <Flex
            justify="space-between"
            align="center"
            style={{ padding: "20px 0" }}
          >
            <Flex align="center" gap="16px">
              {!!navConfig.find(
                (item) => item.link === selectedMenuKey && item.back,
              ) && (
                <Button
                  icon={<ArrowLeftOutlined />}
                  type="link"
                  onClick={onBack}
                />
              )}
              <Typography.Title level={3} style={{ margin: 0, padding: 0 }}>
                {
                  navConfig.filter((item) => item.link === selectedMenuKey)[0]
                    ?.title
                }
              </Typography.Title>
            </Flex>
            <Flex align="center" gap="16px">
              <Typography.Text>{data?.email}</Typography.Text>
              <Button
                icon={<LoginOutlined />}
                type="text"
                danger
                onClick={handleLogout}
              />
            </Flex>
          </Flex>
        </AntdLayout.Header>

        <AntdLayout.Content style={{ padding: "38px 64px" }}>
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
