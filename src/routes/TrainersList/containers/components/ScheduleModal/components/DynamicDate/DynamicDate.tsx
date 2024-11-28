import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Flex, TimePicker } from "antd";
import dayjs from "dayjs";
import { Dispatch, SetStateAction, useState } from "react";
import { useTranslation } from "react-i18next";

import { weekDays } from "@/routes/TrainersList/containers/components/InfoScheduleModal/types";

import { ScheduleItem, TimePickerValue, WeekDay } from "../../types";

type Props = {
  id: (typeof weekDays)[number];
  setScheduleValue: Dispatch<SetStateAction<ScheduleItem>>;
  setDynamicDateList: Dispatch<
    SetStateAction<Record<WeekDay, TimePickerValue[]>>
  >;
  scheduleValue?: ScheduleItem;
};

export const DynamicDate = ({
  id,
  setScheduleValue,
  scheduleValue,
  setDynamicDateList,
}: Props) => {
  const { t } = useTranslation("c_trainer");

  const defaultValue = (scheduleValue?.[id] || []).map((item) =>
    item.map((it) => dayjs(it)),
  ) as TimePickerValue[];

  const [itemValue, setItemValue] = useState<TimePickerValue[]>(defaultValue);

  const handleTimePickerChange = (value: TimePickerValue, index: number) => {
    if (!value) {
      return;
    }

    setItemValue((prev) => {
      if (!prev) {
        return [value];
      }

      prev[index] = value;
      return prev;
    });
  };

  const updateScheduleValue = (newScheduleValue?: TimePickerValue[]) => {
    setScheduleValue((prev) => ({
      ...prev,
      [id]: (newScheduleValue || itemValue)
        .map((item) => item?.map((it) => it?.format()).filter(Boolean))
        .filter((it) => (it?.length || 0) > 0),
    }));
  };

  const handleTimePickerSubmit = (value: TimePickerValue, index: number) => {
    if ((value?.length || 0) < 2) return;
    updateScheduleValue();

    setDynamicDateList((prev) => {
      prev[id][index] = value;
      return prev;
    });
  };

  const addItemValue = () => {
    setItemValue((prev) => {
      if (!prev) {
        return [[null, null]];
      }

      return [...prev, [null, null]];
    });

    setDynamicDateList((prev) => {
      prev[id][itemValue.length] = [null, null];
      return prev;
    });
  };

  const removeItemValue = (index: number) => {
    setItemValue((prev) => {
      const newValue = [...prev.slice(0, index), ...prev.slice(index + 1)];
      updateScheduleValue(newValue);
      return newValue;
    });

    setDynamicDateList((prev) => {
      prev[id] = [...prev[id].slice(0, index), ...prev[id].slice(index + 1)];
      return prev;
    });
  };

  return (
    <Flex vertical gap="8px">
      {itemValue.map((item, index) => (
        <Flex gap="8px" key={item?.[0]?.format()}>
          <TimePicker.RangePicker
            format="HH:00"
            showNow={false}
            style={{ width: "80%" }}
            value={item}
            onOk={(value) => handleTimePickerSubmit(value, index)}
            onChange={(value) => handleTimePickerChange(value, index)}
          />
          <Button
            icon={<DeleteOutlined />}
            onClick={() => removeItemValue(index)}
          />
        </Flex>
      ))}
      {itemValue.length < 3 && (
        <Button
          type="dashed"
          icon={<PlusOutlined />}
          style={{ width: "80%" }}
          onClick={addItemValue}
        >
          {t("scheduleModal.addTime")}
        </Button>
      )}
    </Flex>
  );
};
