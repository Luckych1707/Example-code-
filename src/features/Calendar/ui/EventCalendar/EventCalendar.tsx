import { Calendar, Flex, Select } from "antd";

import { EventCalendarProps } from "@/features/Calendar/model/types";

export const EventCalendar = ({ onChange }: EventCalendarProps) => {
  return (
    <Flex style={{ width: 300, border: `1px solid #F0F0F0` }}>
      <Calendar
        fullscreen={false}
        onChange={onChange}
        headerRender={({ value, onChange }) => {
          const start = 0;
          const end = 12;
          const monthOptions = [];

          let current = value.clone();

          const months = [];
          for (let i = 0; i < 12; i++) {
            current = current.month(i);
            months.push(
              current.locale("ru").format("MMMM").charAt(0).toUpperCase() +
                current.locale("ru").format("MMMM").slice(1),
            );
          }

          for (let i = start; i < end; i++) {
            monthOptions.push(
              <Select.Option key={i} value={i}>
                {months[i]}
              </Select.Option>,
            );
          }

          const year = value.year();
          const month = value.month();
          const options = [];
          for (let i = year - 10; i < year + 10; i += 1) {
            options.push(
              <Select.Option key={i} value={i}>
                {i}
              </Select.Option>,
            );
          }

          return (
            <Flex gap="8px" justify="flex-end" style={{ padding: "12px" }}>
              <Select
                value={year}
                onChange={(newYear) => {
                  const now = value.clone().year(newYear);
                  onChange(now);
                }}
              >
                {options}
              </Select>

              <Select
                style={{ width: "105px" }}
                value={month}
                onChange={(newMonth) => {
                  const now = value.clone().month(newMonth);
                  onChange(now);
                }}
              >
                {monthOptions}
              </Select>
            </Flex>
          );
        }}
      />
    </Flex>
  );
};
