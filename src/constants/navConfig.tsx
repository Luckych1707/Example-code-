import {
  CalendarOutlined,
  FlagOutlined,
  HomeOutlined,
  NotificationOutlined,
  TagOutlined,
} from "@ant-design/icons";

export const navConfig = [
  { title: "Справочник маршрутов", link: "/routes", icons: <FlagOutlined /> },
  {
    title: "Справочник категорий",
    link: "/categories",
    icons: <TagOutlined />,
  },
  { title: "Справочник городов", link: "/cities", icons: <HomeOutlined /> },
  { title: "Календарь", link: "/calendar", icons: <CalendarOutlined /> },
  {
    title: "Обратная связь",
    link: "/feedback",
    icons: <NotificationOutlined />,
  },
];
