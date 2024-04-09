import { Tag } from "antd";

import { FeedbackStatus as FeedbackStatusType } from "@/shared/types/types";

type Props = {
  status: FeedbackStatusType;
};

export const FeedbackStatus = ({ status }: Props) => {
  switch (status) {
    case "new":
      return <Tag color="blue">Новое</Tag>;

    case "processed":
      return <Tag color="green">Обработано</Tag>;

    case "viewed":
      return <Tag color="orange">Просмотрено</Tag>;

    default:
      return <Tag color="orange">Просмотрено</Tag>;
  }
};
