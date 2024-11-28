import { StarOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Flex, Modal, Space, Typography } from "antd";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";

import { getTrainerReviews } from "@/api/queries/getTrainerReviews";

type ModalProps = {
  isOpen: boolean;
  onClear: () => void;
  trainerId: string;
};

export const ReviewsModal = ({ isOpen, onClear, trainerId }: ModalProps) => {
  const { t } = useTranslation(["c_trainer"]);

  const { data: reviewsData } = useQuery({
    ...getTrainerReviews.getQueryOptions(trainerId, { limit: 99999 }),
    retry: false,
  });

  const reviews = reviewsData?.result?.items;

  return (
    <Modal
      title={t("fields.reviews")}
      open={isOpen}
      onCancel={onClear}
      footer={false}
    >
      {reviews?.map((item) => (
        <Flex style={{ paddingBottom: "20px" }}>
          <Flex vertical>
            <Space>
              <StarOutlined />
              <Typography.Text strong>{item?.rating}</Typography.Text>
              <Typography.Text strong>{`${[
                item?.user?.lastName,
                item?.user?.firstName,
              ]
                .filter(Boolean)
                .join(" ")}`}</Typography.Text>
              <Typography.Text>
                {dayjs(item.updatedAt).format("YYYY-MM-DD HHA")}
              </Typography.Text>
            </Space>
            <Typography.Text>{item.text}</Typography.Text>
          </Flex>
        </Flex>
      ))}
    </Modal>
  );
};
