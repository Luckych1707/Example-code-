import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Flex, Popconfirm, Typography } from "antd";
import { ColumnsType } from "antd/es/table";
import dayjs from "dayjs";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import { BookingSchema } from "@/api/schemas";

interface Props {
  onTrainerClick: (id: string) => void;
  onBookingEditClick: (id: string) => void;
  handleDeleteBooking: (id: string) => void;
}

export const useBookingsColumns = ({
  onTrainerClick,
  onBookingEditClick,
  handleDeleteBooking,
}: Props) => {
  const { t } = useTranslation("p_users");

  return useMemo<ColumnsType<BookingSchema>>(
    () => [
      {
        title: t("bookingTable.columnName.name"),
        width: "25%",
        render: ({ trainer }) => (
          <Typography.Text
            style={{ cursor: "pointer" }}
            onClick={() => onTrainerClick(trainer.id)}
          >
            {[trainer?.lastName, trainer?.firstName].filter(Boolean).join(" ")}
          </Typography.Text>
        ),
      },
      {
        title: t("bookingTable.columnName.date"),
        width: "25%",
        render: ({ bookingDate, status }) => (
          <Typography.Text>
            {[dayjs(bookingDate).format("YYYY-MM-DD HHA"), status]
              .filter(Boolean)
              .join(" ")}
          </Typography.Text>
        ),
      },
      {
        title: t("bookingTable.columnName.location"),
        width: "25%",
        render: ({ location }) => (
          <Typography.Text>
            {[location.address, location.name].filter(Boolean).join(" ")}
          </Typography.Text>
        ),
      },
      {
        title: t("bookingTable.columnName.actions"),
        render: ({ id, status }) => (
          <Flex gap="8px">
            <Button
              icon={<EditOutlined />}
              onClick={() => onBookingEditClick(id)}
              disabled={status !== "active"}
            />
            <Popconfirm
              title={t("bookingTable.deleteBookingPopconfirm.title")}
              description={t("bookingTable.deleteBookingPopconfirm.text")}
              onConfirm={() => handleDeleteBooking(id)}
              okText={t("glossary:actions.submit")}
              cancelText={t("glossary:actions.cancel")}
            >
              <Button icon={<DeleteOutlined />} />
            </Popconfirm>
          </Flex>
        ),
      },
    ],
    [t],
  );
};
