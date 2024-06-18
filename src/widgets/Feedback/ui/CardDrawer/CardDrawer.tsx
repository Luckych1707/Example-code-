import {
  CalendarTwoTone,
  CloseOutlined,
  IdcardTwoTone,
  MailTwoTone,
} from "@ant-design/icons";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, Divider, Drawer, Flex, Typography } from "antd";
import dayjs from "dayjs";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import { feedbacksViewed } from "@/entities/Feedback/api/feedbackViewed";
import { FeedbackAnswer } from "@/features/Feedback";
import { getFeedbackList } from "@/shared/api/handBooks/queries/getFeedbacks";
import { FeedbackStatus } from "@/shared/ui/FeedbackStatus";
import { getFeedback } from "@/widgets/Feedback/api/queries/getFeedback";
import { CardDrawerProps } from "@/widgets/Feedback/model/types";

export const CardDrawer = ({ id, onClose }: CardDrawerProps) => {
  const { t } = useTranslation(["p_feedback", "glossary"]);

  const queryClient = useQueryClient();

  const { data } = useQuery({
    ...getFeedback.getQueryOptions(id || ""),
  });

  const currentDate =
    data && dayjs(new Date(data?.createdAt)).format("DD MMMM YYYY");

  const viewedMutation = useMutation({
    ...feedbacksViewed.getMutationOptions(),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [getFeedback.queryName],
      });
      await queryClient.invalidateQueries({
        queryKey: [getFeedbackList.queryName],
      });
    },
  });

  useEffect(() => {
    if (data?.status === "new") {
      viewedMutation.mutate(id);
    }
  }, [data, id, viewedMutation]);

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
          <FeedbackStatus status={data?.status} />
        </Flex>

        <Flex gap="8px">
          <MailTwoTone twoToneColor="#1677FF" />
          <Typography.Text>{data?.user.email}</Typography.Text>
        </Flex>

        <Flex gap="8px">
          <Flex gap="8px">
            <IdcardTwoTone twoToneColor="#1677FF" />
            <Typography.Text>{data?.id}</Typography.Text>
          </Flex>

          <Flex gap="8px">
            <CalendarTwoTone twoToneColor="#1677FF" />
            <Typography.Text>
              {t("glossary:morphemes.yer", { key: currentDate })}
            </Typography.Text>
          </Flex>
        </Flex>

        <Typography.Paragraph type="secondary">
          {data?.text}
        </Typography.Paragraph>
      </Flex>

      <Divider />

      <Flex vertical gap="12px">
        <Flex gap="32px">
          <Flex vertical>
            <Typography.Text type="secondary">
              {t("feedbackItemDrawer.deviceName")}
            </Typography.Text>
            <Typography.Text>{data?.platformName}</Typography.Text>
          </Flex>

          <Flex vertical>
            <Typography.Text type="secondary">
              {t("feedbackItemDrawer.osVersion")}
            </Typography.Text>
            <Typography.Text>{data?.platformOs}</Typography.Text>
          </Flex>
        </Flex>

        <Flex vertical>
          <Typography.Text type="secondary">
            {t("feedbackItemDrawer.appVersion")}
          </Typography.Text>
          <Typography.Text>{data?.appVersion}</Typography.Text>
        </Flex>
      </Flex>

      <Divider />

      {data?.status !== "processed" && (
        <FeedbackAnswer feedbackId={id} onClose={onClose} />
      )}
    </Drawer>
  );
};
