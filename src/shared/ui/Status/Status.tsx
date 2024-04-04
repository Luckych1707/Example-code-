import { Tag } from "antd";

type Props = {
  status: "new" | "processed" | "viewed";
};

export const Status = ({ status }: Props) => {
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
