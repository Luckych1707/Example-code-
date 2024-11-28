import { useQuery } from "@tanstack/react-query";
import { Button, Flex, Modal, Typography } from "antd";
import dayjs from "dayjs";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { getTimeSlots } from "@/api/queries/getTimeSlots";
import { weekDays } from "@/routes/TrainersList/containers/components/InfoScheduleModal/types";
import { WeekDay } from "@/routes/TrainersList/containers/components/ScheduleModal/types";
import { isDefined } from "@/utils/isDefined";

type ModalProps = {
  trainerId: string;
  isOpen: boolean;
  onClear: () => void;
};

const date: Record<(typeof weekDays)[number], string> = {
  monday: "Monday",
  friday: "Friday",
  saturday: "Saturday",
  sunday: "Sunday",
  thursday: "Thursday",
  tuesday: "Tuesday",
  wednesday: "Wednesday",
};

export const InfoScheduleModal = ({
  trainerId,
  isOpen,
  onClear,
}: ModalProps) => {
  const { t } = useTranslation("c_trainer");

  const [month, setMonth] = useState(dayjs(new Date()).format("YYYY-MM"));

  const { data } = useQuery({
    ...getTimeSlots.getQueryOptions(trainerId || "", {
      month: month.toString(),
    }),
  });

  const currentMonth = dayjs(month).format("MMMM");

  const defaultValue = Object.values(data?.result?.items || {});

  const getCurrentSchedule = (weekDay: WeekDay) => {
    return defaultValue?.map(
      (it) =>
        it
          .map((scheduleItem) => {
            if (scheduleItem.dayOfWeek === weekDay) {
              return Number(scheduleItem.time?.split(":", 1));
            }
          })
          .filter(isDefined)
          ?.reduce((acc, cur) => {
            const lastItemList = acc[acc.length - 1];

            if (
              lastItemList &&
              lastItemList.length > 0 &&
              (Number(cur) - 1 ===
                Number(lastItemList[lastItemList.length - 1]) ||
                Number(cur) === Number(lastItemList[lastItemList.length - 1]))
            ) {
              const newAcc = acc.slice(0, -1);

              return [...newAcc, [...lastItemList, cur]];
            }

            return [...acc, [cur]];
          }, [] as number[][])
          .map((it) => {
            if (it[it.length - 1] !== it[0]) {
              return `${it[0]} - ${it[it.length - 1]}`;
            }

            return it[0].toString();
          }),
    );
  };

  const switchMonth = () => {
    if (month === dayjs(new Date()).format("YYYY-MM")) {
      setMonth(
        dayjs(new Date())
          .month(dayjs().month() + 1)
          .date(1)
          .format("YYYY-MM"),
      );
    } else {
      setMonth(dayjs(new Date()).format("YYYY-MM"));
    }
  };

  return (
    <Modal
      title={
        <Flex gap="8px" align="center">
          {`Schedule on ${currentMonth}`}
          <Button size="small" type="primary" onClick={switchMonth}>
            {t("scheduleModal.switchMonth")}
          </Button>
        </Flex>
      }
      open={isOpen}
      footer={false}
      onCancel={onClear}
      width={"1800px"}
    >
      <Flex justify="space-between">
        {weekDays.map((item) => {
          const currentSchedule = getCurrentSchedule(item);
          return (
            <Flex vertical>
              <Flex align="center" gap="12px" style={{ marginBottom: "16px" }}>
                <Typography.Title level={2} style={{ margin: 0 }}>
                  {date[item]}
                </Typography.Title>
              </Flex>

              {currentSchedule?.map((item) => (
                <Flex vertical>
                  {item?.map((it) => (
                    <Typography.Text strong>
                      {it
                        .split(" - ")
                        .map((_it) => `${_it}:00`)
                        .join(" - ")}
                    </Typography.Text>
                  ))}
                </Flex>
              ))}
            </Flex>
          );
        })}
      </Flex>
    </Modal>
  );
};
