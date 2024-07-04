import { CalendarTwoTone, CompassTwoTone } from "@ant-design/icons";
import { Flex, Typography } from "antd";

import { EventListType } from "@/widgets/Calendar/model/types";

export const EventCard = ({ event, setSelectedEvent }: EventListType) => {
  return (
    <Flex vertical gap="4px">
      <Typography.Title
        level={4}
        onClick={() => setSelectedEvent(event?.id || "")}
        style={{ cursor: "pointer" }}
      >
        {event?.name}
      </Typography.Title>
      <Flex gap="25px">
        <Flex gap="8px">
          <CalendarTwoTone twoToneColor="#1677FF" />
          <Typography.Text>{event?.date}</Typography.Text>
        </Flex>
        <Flex gap="8px">
          <CompassTwoTone twoToneColor="#1677FF" />
          <Typography.Text>{event?.city?.name}</Typography.Text>
        </Flex>
      </Flex>
      <Typography.Paragraph
        type="secondary"
        ellipsis={{
          rows: 3,
        }}
      >
        {event?.description}
      </Typography.Paragraph>
    </Flex>
  );
};
