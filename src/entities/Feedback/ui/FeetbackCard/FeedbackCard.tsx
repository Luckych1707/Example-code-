import { CalendarFilled, IdcardTwoTone, MailTwoTone } from "@ant-design/icons";
import { Flex, Typography } from "antd";
import dayjs from "dayjs";

import { FeedbackCardProps } from "@/entities/Feedback/models/types";
import { FeedbackStatus } from "@/shared/ui/FeedbackStatus";

export const FeedbackCard = ({
  reviews,
  setFeedbackItemId,
  setIsOpen,
}: FeedbackCardProps) => {
  const onItemClick = () => {
    setIsOpen();
    setFeedbackItemId(reviews.id);
  };

  return (
    <Flex vertical gap="8px">
      <Flex gap="32px" style={{ cursor: "pointer" }} onClick={onItemClick}>
        <Flex gap="8px">
          <MailTwoTone twoToneColor="#1677FF" />
          <Typography.Text strong>{reviews.user.email}</Typography.Text>
        </Flex>
        <Flex gap="8px">
          <IdcardTwoTone twoToneColor="#1677FF" />
          <Typography.Text strong>{reviews.id}</Typography.Text>
        </Flex>
      </Flex>

      <Flex gap="16px">
        <Flex gap="8px">
          <CalendarFilled />
          <Typography.Text>
            {dayjs(new Date(reviews.createdAt)).format("DD-MM-YYYY")}
          </Typography.Text>
        </Flex>

        <FeedbackStatus status={reviews.status} />
      </Flex>

      <Typography.Paragraph
        type="secondary"
        ellipsis={{
          rows: 3,
        }}
      >
        {reviews.text}
      </Typography.Paragraph>
    </Flex>
  );
};
