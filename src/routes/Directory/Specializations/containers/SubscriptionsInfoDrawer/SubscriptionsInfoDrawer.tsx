import { CloseOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import {
  Button,
  Descriptions,
  DescriptionsProps,
  Drawer,
  Space,
  Tag,
  Typography,
} from "antd";
import { useTranslation } from "react-i18next";

import { getSubscription } from "@/api/queries/getSubscription";
import { Image } from "@/components/Image";

type Props = {
  id: string;
  onClose: () => void;
  isOpen: boolean;
};

export const SubscriptionsInfoDrawer = ({ id, onClose, isOpen }: Props) => {
  const { t } = useTranslation(["p_directory_specializations", "glossary"]);

  const { data } = useQuery({
    ...getSubscription.getQueryOptions(id || ""),
  });

  const subscription = data?.result;

  const items: DescriptionsProps["items"] = [
    {
      key: "name",
      label: `${t("subscriptionsDrawer.name")}`,
      children: <Typography.Text>{subscription?.name}</Typography.Text>,
      span: 2,
    },
    {
      key: "smallPrice",
      label: `${t("subscriptionsDrawer.price.small")}`,
      children: <Typography.Text>{subscription?.smallPrice}</Typography.Text>,
    },
    {
      key: "smallAmount",
      label: `${t("subscriptionsDrawer.amount.small")}`,
      children: <Typography.Text>{subscription?.smallAmount}</Typography.Text>,
    },
    {
      key: "mediumPrice",
      label: `${t("subscriptionsDrawer.price.medium")}`,
      children: <Typography.Text>{subscription?.mediumPrice}</Typography.Text>,
    },
    {
      key: "mediumAmount",
      label: `${t("subscriptionsDrawer.amount.medium")}`,
      children: <Typography.Text>{subscription?.mediumAmount}</Typography.Text>,
    },
    {
      key: "highPrice",
      label: `${t("subscriptionsDrawer.price.high")}`,
      children: <Typography.Text>{subscription?.highPrice}</Typography.Text>,
    },
    {
      key: "highAmount",
      label: `${t("subscriptionsDrawer.amount.high")}`,
      children: <Typography.Text>{subscription?.highAmount}</Typography.Text>,
    },
    {
      key: "maxPrice",
      label: `${t("subscriptionsDrawer.price.max")}`,
      children: <Typography.Text>{subscription?.maxPrice}</Typography.Text>,
    },
    {
      key: "maxAmount",
      label: `${t("subscriptionsDrawer.amount.max")}`,
      children: <Typography.Text>{subscription?.maxAmount}</Typography.Text>,
    },
    {
      key: "loyaltyPoints",
      label: `${t("subscriptionsDrawer.loyaltyPoints")}`,
      children: (
        <Typography.Text>{subscription?.loyaltyPoints}</Typography.Text>
      ),
      span: 2,
    },

    {
      key: "files",
      label: `${t("subscriptionsDrawer.file")}`,
      children: (
        <Space>
          <Image id={subscription?.image?.id || ""} />
        </Space>
      ),
      span: 2,
      contentStyle: { display: "flex", flexDirection: "column" },
    },
    {
      key: "goals",
      label: `${t("subscriptionsDrawer.goals")}`,
      children: (
        <div>
          {subscription?.goals.map((item) => (
            <Tag key={item.id} style={{ marginBottom: "8px" }}>
              {item.name}
            </Tag>
          ))}
        </div>
      ),
    },
  ];

  return (
    <Drawer
      title={t("subscriptionsDrawer.infoTitle")}
      open={isOpen}
      closeIcon={false}
      maskClosable={false}
      extra={<Button onClick={onClose} type="text" icon={<CloseOutlined />} />}
    >
      <Descriptions items={items} column={2} />
    </Drawer>
  );
};
