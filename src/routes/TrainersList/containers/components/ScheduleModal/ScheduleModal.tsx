import { Button, Flex, Form, message, Modal, Typography } from "antd";
import dayjs from "dayjs";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { DynamicDate } from "@/routes/TrainersList/containers/components/ScheduleModal/components/DynamicDate";
import {
  ScheduleItem,
  TimePickerValue,
  WeekDay,
  weekDays,
} from "@/routes/TrainersList/containers/components/ScheduleModal/types";

type ModalProps = {
  isOpen: boolean;
  onClear: () => void;
  defaultValue: ScheduleItem;
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

export const ScheduleModal = ({
  isOpen,
  onClear,
  defaultValue,
}: ModalProps) => {
  const { t } = useTranslation(["c_trainer", "glossary"]);

  const dynamicDateListDefaultValue: Record<
    (typeof weekDays)[number],
    TimePickerValue[]
  > = {
    monday: [],
    friday: [],
    saturday: [],
    sunday: [],
    thursday: [],
    tuesday: [],
    wednesday: [],
  };

  const [messageApi, contextHolder] = message.useMessage();

  const [scheduleValue, setScheduleValue] =
    useState<ScheduleItem>(defaultValue);

  const [dynamicDateList, setDynamicDateList] = useState<
    Record<WeekDay, TimePickerValue[]>
  >(dynamicDateListDefaultValue);

  const useHandleSubmit = () => {
    return Form.useFormInstance();
  };

  const setFormValue = useHandleSubmit();

  const handleScheduleSubmit = () => {
    const isDynamicDateListEmpty = Object.values(dynamicDateList)
      .flat()
      .some((item) => item?.filter((it) => it === null).length || 0 > 0);

    if (isDynamicDateListEmpty) {
      messageApi.open({
        type: "error",
        content: `${t("error.emptyTimeSlots")}`,
      });
    } else {
      setFormValue.setFieldValue("schedule", scheduleValue);
      setDynamicDateList(dynamicDateListDefaultValue);
      onClear();
    }
  };

  const currentMonth = dayjs(new Date())
    .month(dayjs(new Date()).month() + (dayjs(new Date()).date() < 20 ? 0 : 1))
    .date(1)
    .format("MMMM");

  return (
    <Modal
      title={`Schedule on ${currentMonth}`}
      open={isOpen}
      footer={false}
      onCancel={() => {
        setDynamicDateList(dynamicDateListDefaultValue);
        onClear();
      }}
      width={"1800px"}
    >
      {contextHolder}
      <Flex justify="space-between">
        {weekDays.map((item: WeekDay) => (
          <Flex vertical style={{ width: "100%" }}>
            <Flex align="center" gap="12px" style={{ marginBottom: "16px" }}>
              <Typography.Title level={2} style={{ margin: 0 }}>
                {date[item]}
              </Typography.Title>
            </Flex>
            <DynamicDate
              id={item}
              setDynamicDateList={setDynamicDateList}
              setScheduleValue={setScheduleValue}
              scheduleValue={scheduleValue}
            />
          </Flex>
        ))}
      </Flex>
      <Button
        type="primary"
        style={{ marginTop: "16px" }}
        onClick={handleScheduleSubmit}
      >
        {t("glossary:actions.submit")}
      </Button>
    </Modal>
  );
};
