import { CloseOutlined, StarOutlined, WarningTwoTone } from "@ant-design/icons";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Link, useMatch } from "@tanstack/react-router";
import {
  Alert,
  Button,
  Calendar,
  ConfigProvider,
  Drawer,
  Flex,
  Form,
  Input,
  message,
  Select,
  Space,
  Spin,
  TimePicker,
  Typography,
} from "antd";
import { isAxiosError } from "axios";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import { cancelBooking } from "@/api/mutation/cancelBooking";
import { editBooking } from "@/api/mutation/editBooking";
import { getAllTrainers } from "@/api/queries/getAllTraines";
import { getBooking } from "@/api/queries/getBooking";
import { getBookings } from "@/api/queries/getBookings";
import { getTrainerBooking } from "@/api/queries/getTrainerBooking";
import { getUser } from "@/api/queries/getUser";
import { UserSchema } from "@/api/schemas";
import {
  TrainerScheduleItem,
  WeekDay,
} from "@/routes/TrainersList/containers/components/ScheduleModal/types";

type Props = {
  onClose: () => void;
  isOpen: boolean;
  bookingId: string;
};

export const EditBookingDrawer = ({ onClose, isOpen, bookingId }: Props) => {
  const { t } = useTranslation(["p_users", "glossary"]);

  const queryClient = useQueryClient();

  const [form] = Form.useForm();

  const [messageApi, contextHolder] = message.useMessage();

  const selectedTrainerId = Form.useWatch("trainer", form);
  const selectedDate = Form.useWatch("date", form);
  const selectedTime = Form.useWatch("time", form);

  const [isCancelBooking, setIsCancelBooking] = useState(false);
  const [cancelBookingComment, setCancelBookingComment] = useState<
    string | undefined
  >();

  const { params } = useMatch({ from: "/user/$id" });

  const { data: userInfo } = useQuery({
    ...getUser.getQueryOptions(params.id || ""),
  });

  const user = userInfo?.result;

  const { data: bookingInfo, isLoading } = useQuery({
    ...getBooking.getQueryOptions(bookingId || ""),
  });

  const { data: trainerInfo } = useQuery({
    ...getAllTrainers.getQueryOptions({
      cityId: [user?.cityId || ""],
      subscriptionId: user?.subscriptions?.map((item) => item.subscriptionId),
    }),
  });

  const editBookingMutation = useMutation({
    ...editBooking.getMutationOptions(),
    onSuccess: async () => {
      await queryClient.refetchQueries({
        queryKey: [getBooking.queryName],
      });
      onClose();
    },
    onError: (error) => {
      if (!isAxiosError(error))
        return messageApi.open({
          type: "error",
          content: t("glossary:baseError"),
        });

      const errorMessage = error.response?.data.msg;

      if (!errorMessage)
        return messageApi.open({
          type: "error",
          content: t("glossary:baseError"),
        });

      messageApi.open({
        type: "error",
        content: `${errorMessage}`,
      });
    },
  });

  const cancelBookingMutation = useMutation({
    ...cancelBooking.getMutationOptions(),
    onSuccess: async () => {
      await queryClient.refetchQueries({
        queryKey: [getBookings.queryName],
      });
      onClose();
    },
    onError: (error) => {
      if (!isAxiosError(error))
        return messageApi.open({
          type: "error",
          content: t("glossary:baseError"),
        });

      const errorMessage = error.response?.data.msg;

      if (!errorMessage)
        return messageApi.open({
          type: "error",
          content: t("glossary:baseError"),
        });

      messageApi.open({
        type: "error",
        content: `${errorMessage}`,
      });
    },
  });

  const trainers = trainerInfo?.result?.items;

  const booking = bookingInfo?.result;

  const { data: trainersBookingsInfo } = useQuery({
    ...getTrainerBooking.getQueryOptions(selectedTrainerId || ""),
    enabled: !!selectedTrainerId,
  });

  const trainerBookings = trainersBookingsInfo?.result?.items;

  const onFinish = (values: { trainer: string; time: Dayjs; date: Dayjs }) => {
    const newTime = new Date(values.date.format("YYYY-MM-DD")).setHours(
      Number(values.time.format("HH")),
    );

    const localISOTime = new Date(
      newTime - new Date().getTimezoneOffset() * 60000,
    ).toISOString();

    editBookingMutation.mutate({
      id: bookingId,
      booking: {
        status: booking?.status !== "cancel" ? booking?.status : "active",
        bookingDate: localISOTime || "",
        trainerId: selectedTrainerId || "",
      },
    });
  };

  const handleCancelBooking = () => {
    if (cancelBookingComment)
      cancelBookingMutation.mutate({
        id: bookingId,
        comment: cancelBookingComment,
      });
  };

  const datePlusYears = (date: Date, year: number) => {
    const newDate = new Date(date);
    const curDateNum = date.getFullYear();
    newDate.setFullYear(curDateNum + year);
    return newDate;
  };

  useEffect(() => {
    form.setFieldsValue({
      trainer: booking?.trainerId,
      date: dayjs(booking?.bookingDate),
      time: dayjs(booking?.bookingDate),
    });
  }, [booking?.bookingDate, booking?.trainerId, form]);

  const disabledTime = useMemo(() => {
    if (!trainerBookings) return new Map();

    const bookings = trainerBookings
      .filter((date) => {
        if (!date.bookingDate) return false;

        return (
          dayjs(date.bookingDate).format("YYYY-MM-DD") ===
          selectedDate?.format("YYYY-MM-DD")
        );
      })
      .map((item) => {
        return {
          time: new Date(item.bookingDate || ""),
          user: item.user,
        };
      })
      .filter(
        (item) =>
          item.time.getHours() !==
          new Date(booking?.bookingDate || "").getHours(),
      )
      .map((it) => [
        [it.time.getHours() - 1, it.user],
        [it.time.getHours(), it.user],
        [it.time.getHours() + 1, it.user],
      ])
      .flat();

    return new Map(bookings as [number, UserSchema][]);
  }, [booking?.bookingDate, selectedDate, trainerBookings]);

  const interferingBooking = disabledTime.get(selectedTime?.get("hours"));

  const curDayName = useMemo(() => {
    try {
      const date = new Date(selectedDate);
      return date.toLocaleDateString("en", { weekday: "long" });
    } catch (e) {
      return "";
    }
  }, [selectedDate]);

  const schedule = trainers
    ?.filter((item) => item.id === selectedTrainerId)
    ?.map((it) => {
      const scheduleItem = it?.settings as TrainerScheduleItem;
      return scheduleItem?.[curDayName.toLowerCase() as WeekDay];
    });

  return (
    <Drawer
      title={t("editBookingDrawer.title")}
      width={480}
      open={isOpen}
      closeIcon={false}
      maskClosable={false}
      footer={
        <Button type="primary" onClick={() => form.submit()}>
          {t("glossary:actions.submit")}
        </Button>
      }
      extra={<Button onClick={onClose} type="text" icon={<CloseOutlined />} />}
    >
      {contextHolder}
      {isLoading ? (
        <Flex justify="center" align="center" style={{ height: "100vh" }}>
          <Spin />
        </Flex>
      ) : (
        <ConfigProvider
          theme={{
            components: {
              DatePicker: {
                timeColumnWidth: 120,
              },
            },
          }}
        >
          <Form
            form={form}
            name="bookingEdit"
            layout="vertical"
            onFinish={onFinish}
          >
            <Flex vertical>
              <Form.Item
                name="trainer"
                label={t("editBookingDrawer.trainerLabel")}
                rules={[{ required: true }]}
              >
                {trainers && (
                  <Select showSearch disabled={booking?.status === "finished"}>
                    {trainers.map((item) => (
                      <Select.Option key={item.id} value={item.id}>
                        {[item.lastName, item.firstName, item.rating]
                          .filter(Boolean)
                          .join(" ")}
                        <StarOutlined />
                      </Select.Option>
                    ))}
                  </Select>
                )}
              </Form.Item>

              <Form.Item
                name="date"
                label={t("editBookingDrawer.dateLabel")}
                rules={[{ required: true }]}
                style={{ margin: "0" }}
              >
                {booking?.bookingDate && booking?.status !== "finished" ? (
                  <Calendar
                    fullscreen={false}
                    validRange={[
                      dayjs(new Date(Date.now() - 86400000)),
                      dayjs(datePlusYears(new Date(booking.bookingDate), 3)),
                    ]}
                  />
                ) : (
                  <Typography.Text>
                    {booking?.bookingDate &&
                      dayjs(booking?.bookingDate).format("YYYY-MM-DD")}
                  </Typography.Text>
                )}
              </Form.Item>

              <Flex vertical>
                <Flex align="center" gap="12px">
                  <Form.Item
                    name="time"
                    label={t("editBookingDrawer.timeLabel")}
                    rules={[{ required: true }]}
                  >
                    {booking?.bookingDate && booking?.status !== "finished" ? (
                      <TimePicker
                        format="HH:00"
                        size="middle"
                        showNow={false}
                        cellRender={(item) => {
                          return (
                            <Flex
                              gap="12px"
                              style={{
                                paddingBottom: "2px",
                                cursor: "pointer",
                              }}
                            >
                              <Typography.Text
                                style={
                                  selectedTime?.get("hours") === item
                                    ? {
                                        color: "#1677ff",
                                      }
                                    : undefined
                                }
                              >
                                {`${item}:00`}
                              </Typography.Text>
                              {!!disabledTime.get(item) ? (
                                <WarningTwoTone twoToneColor="#d1b500" />
                              ) : null}
                            </Flex>
                          );
                        }}
                      />
                    ) : (
                      <Typography.Text>
                        {booking?.bookingDate &&
                          dayjs(booking?.bookingDate).format("HH A")}
                      </Typography.Text>
                    )}
                  </Form.Item>

                  {schedule?.map((item) => (
                    <Flex gap="8px">
                      {item?.length > 0 ? (
                        item?.map((it) => (
                          <Flex gap="5px">
                            <Typography.Text>
                              {t("editBookingDrawer.schedule", {
                                day: curDayName,
                                from: it?.from,
                                to: it?.to,
                              })}
                            </Typography.Text>
                          </Flex>
                        ))
                      ) : (
                        <Typography.Text>
                          {t("editBookingDrawer.scheduleEmpty")}
                        </Typography.Text>
                      )}
                    </Flex>
                  ))}
                </Flex>

                {!!interferingBooking ? (
                  <Alert
                    style={{ marginBottom: "24px" }}
                    message={
                      <Flex gap="5px">
                        <Link
                          to={"/user/$id"}
                          params={{ id: interferingBooking?.id }}
                          style={{ cursor: "pointer" }}
                        >
                          {[
                            interferingBooking?.lastName,
                            interferingBooking?.firstName,
                          ].join(" ")}
                        </Link>
                        <Typography.Text>
                          {t("editBookingDrawer.selectedTimeWarning")}
                        </Typography.Text>
                      </Flex>
                    }
                    type="warning"
                  />
                ) : null}

                <Flex gap="8px" vertical>
                  {isCancelBooking && (
                    <Input.TextArea
                      value={cancelBookingComment}
                      onChange={(e) => setCancelBookingComment(e.target.value)}
                    />
                  )}
                  {booking?.status === "active" &&
                    (isCancelBooking ? (
                      <Space>
                        <Button onClick={() => setIsCancelBooking(false)}>
                          {t("glossary:actions.cancel")}
                        </Button>

                        <Button
                          type="primary"
                          onClick={handleCancelBooking}
                          disabled={!cancelBookingComment}
                        >
                          {t("glossary:actions.submit")}
                        </Button>
                      </Space>
                    ) : (
                      <Flex>
                        <Button onClick={() => setIsCancelBooking(true)}>
                          {t("editBookingDrawer.cancelButton")}
                        </Button>
                      </Flex>
                    ))}
                </Flex>
              </Flex>
            </Flex>
          </Form>
        </ConfigProvider>
      )}
    </Drawer>
  );
};
