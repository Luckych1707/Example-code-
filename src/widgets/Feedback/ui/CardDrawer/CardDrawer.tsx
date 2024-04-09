import {
  CalendarTwoTone,
  CloseOutlined,
  IdcardTwoTone,
  MailTwoTone,
} from "@ant-design/icons";
import { Button, Divider, Drawer, Flex, Typography } from "antd";
import { useTranslation } from "react-i18next";

import { FeedbackAnswer } from "@/features/Feedback";
import { FeedbackStatus } from "@/shared/ui/FeedbackStatus";
import { mock } from "@/widgets/Feedback/model/mock";
import { CardDrawerProps } from "@/widgets/Feedback/model/types";

export const CardDrawer = ({ id, onClose }: CardDrawerProps) => {
  const { t } = useTranslation("p_feedback");

  return (
    <Drawer
      title={t("feedbackItemDrawer.title")}
      width={480}
      open={!!id}
      extra={<Button icon={<CloseOutlined />} type="text" onClick={onClose} />}
      closeIcon={false}
      maskClosable={false}
    >
      <Flex vertical gap="12px">
        <Flex>
          <FeedbackStatus status={mock.status} />
        </Flex>

        <Flex gap="8px">
          <MailTwoTone twoToneColor="#1677FF" />
          <Typography.Text>{mock.email}</Typography.Text>
        </Flex>

        <Flex gap="116px">
          <Flex gap="8px">
            <IdcardTwoTone twoToneColor="#1677FF" />
            <Typography.Text>{mock.id}</Typography.Text>
          </Flex>

          <Flex gap="8px">
            <CalendarTwoTone twoToneColor="#1677FF" />
            <Typography.Text>{mock.date}</Typography.Text>
          </Flex>
        </Flex>
        <Typography.Paragraph
          type="secondary"
          ellipsis={{
            rows: 3,
          }}
        >
          {mock.text}
        </Typography.Paragraph>
      </Flex>

      <Divider />

      <Flex vertical gap="12px">
        <Flex gap="32px">
          <Flex vertical>
            <Typography.Text type="secondary">
              {t("feedbackItemDrawer.deviceName")}
            </Typography.Text>
            <Typography.Text>{mock.deviceName}</Typography.Text>
          </Flex>

          <Flex vertical>
            <Typography.Text type="secondary">
              {t("feedbackItemDrawer.osVersion")}
            </Typography.Text>
            <Typography.Text>{mock.osVersion}</Typography.Text>
          </Flex>
        </Flex>
        <Flex vertical>
          <Typography.Text type="secondary">
            {t("feedbackItemDrawer.appVersion")}
          </Typography.Text>
          <Typography.Text>{mock.appVersion}</Typography.Text>
        </Flex>
      </Flex>

      <Divider />

      <FeedbackAnswer onClose={onClose} />
    </Drawer>
  );
};
