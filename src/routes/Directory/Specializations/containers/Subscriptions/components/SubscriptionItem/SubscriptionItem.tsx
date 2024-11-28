import { DeleteOutlined, EditOutlined, InfoOutlined } from "@ant-design/icons";
import { Button, Flex, Popconfirm, Typography } from "antd";
import { useTranslation } from "react-i18next";

type Props = {
  id: string;
  name: string;
  handleSelectSubscriptionDelete: (id: string) => void;
  handleSelectSubscriptionEdit: (id: string) => void;
  handleSelectSubscriptionInfo: (id: string) => void;
};

export const SubscriptionItem = ({
  id,
  name,
  handleSelectSubscriptionDelete,
  handleSelectSubscriptionEdit,
  handleSelectSubscriptionInfo,
}: Props) => {
  const { t } = useTranslation("p_directory_specializations");

  return (
    <Flex align="center" justify="space-between" style={{ width: "600px" }}>
      <Typography.Text>{name}</Typography.Text>

      <Flex gap="8px">
        <Button
          icon={<InfoOutlined />}
          onClick={() => {
            handleSelectSubscriptionInfo(id);
          }}
        />
        <Button
          icon={<EditOutlined />}
          onClick={() => {
            handleSelectSubscriptionEdit(id);
          }}
        />
        <Popconfirm
          title={t("deleteSubscriptionsPopconfirm.title")}
          description={t("deleteSubscriptionsPopconfirm.text")}
          onConfirm={() => {
            handleSelectSubscriptionDelete(id);
          }}
          onCancel={(e) => e?.stopPropagation()}
          okText={t("glossary:actions.submit")}
          cancelText={t("glossary:actions.cancel")}
        >
          <Button icon={<DeleteOutlined />} />
        </Popconfirm>
      </Flex>
    </Flex>
  );
};
