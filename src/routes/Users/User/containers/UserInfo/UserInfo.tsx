import { ArrowLeftOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Link, useMatch, useSearch } from "@tanstack/react-router";
import {
  Descriptions,
  DescriptionsProps,
  Empty,
  Flex,
  Spin,
  Typography,
} from "antd";
import { useTranslation } from "react-i18next";

import { getUser } from "@/api/queries/getUser";

export const UserInfo = () => {
  const { t } = useTranslation(["p_users", "glossary"]);

  const { params } = useMatch({ from: "/user/$id" });

  const { data: userInfo, isLoading: userLoading } = useQuery({
    ...getUser.getQueryOptions(params?.id || ""),
  });

  const { limit, page }: { limit: number; page: number } = useSearch({
    strict: false,
  });

  const user = userInfo?.result;

  if (userLoading) {
    return <Spin />;
  }

  if (!user) {
    return <Empty />;
  }

  const items: DescriptionsProps["items"] = [
    {
      key: "1",
      label: `${t("userInfo.fields.name")}`,
      children: (
        <Typography.Text>{`${[user.lastName, user.firstName]
          .filter(Boolean)
          .join(" ")}`}</Typography.Text>
      ),
    },
    {
      key: "2",
      label: `${t("userInfo.fields.gender")}`,
      children: (
        <Typography.Text>
          {t(`glossary:genderOptions.${user.gender}`)}
        </Typography.Text>
      ),
    },
    {
      key: "3",
      label: `${t("userInfo.fields.country")}`,
      children: <Typography.Text>{user.country?.name}</Typography.Text>,
    },
    {
      key: "4",
      label: `${t("userInfo.fields.city")}`,
      children: <Typography.Text>{user.city?.name}</Typography.Text>,
    },
    {
      key: "5",
      label: `${t("userInfo.fields.goals")}`,
      children: <Typography.Text>{user.goal?.name}</Typography.Text>,
    },
    {
      key: "6",
      label: `${t("userInfo.fields.phone")}`,
      children: <Typography.Text>{user.phone}</Typography.Text>,
    },
    {
      key: "7",
      label: `${t("userInfo.fields.injures")}`,
      children: (
        <Typography.Text>
          {user.injures ? t("glossary:yes") : t("glossary:no")}
        </Typography.Text>
      ),
    },

    {
      key: "8",
      label: `${t("userInfo.fields.mail")}`,
      children: <Typography.Text>{user.email}</Typography.Text>,
    },
    {
      key: "9",
      label: `${t("userInfo.fields.restOfSession")}`,
      children: (
        <Typography.Text>
          {user.subscriptions && user.subscriptions.length > 0
            ? user.subscriptions
                ?.map((item) => item.restOfSession)
                ?.reduce((acc, number) => acc && number && acc + number)
            : "0"}
        </Typography.Text>
      ),
    },
    {
      key: "10",
      label: `${t("userInfo.fields.subscriptions")}`,
      children: (
        <Typography.Text>
          {user.subscriptions
            ?.map((item) => item.subscription?.name)
            .join(", ")}
        </Typography.Text>
      ),
    },
  ];

  return (
    <Flex vertical style={{ padding: "12px 24px" }}>
      <Flex align="center" gap="12px" style={{ padding: "12px 0" }}>
        <Link to={"/users"} search={{ limit: limit, page: page }}>
          <ArrowLeftOutlined />
        </Link>

        <Typography.Text strong>{t("userInfo.title")}</Typography.Text>
      </Flex>
      <Flex>
        <Descriptions
          items={items}
          bordered
          layout="vertical"
          column={{ xxl: 10 }}
        />
      </Flex>
    </Flex>
  );
};
