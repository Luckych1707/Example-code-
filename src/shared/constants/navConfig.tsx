import {
  CalendarOutlined,
  FlagOutlined,
  HomeOutlined,
  NotificationOutlined,
  TagOutlined,
} from "@ant-design/icons";

export const navConfig = [
  {
    title: "Справочник маршрутов",
    link: "/routes",
    icons: <FlagOutlined />,
    show: true,
  },
  {
    title: "Справочник категорий",
    link: "/categories",
    icons: <TagOutlined />,
    show: true,
  },
  {
    title: "Справочник городов",
    link: "/cities",
    icons: <HomeOutlined />,
    show: true,
  },
  {
    title: "Календарь",
    link: "/calendar",
    icons: <CalendarOutlined />,
    show: true,
  },
  {
    title: "Обратная связь",
    link: "/feedback",
    icons: <NotificationOutlined />,
    show: true,
  },
  {
    title: "Добавление маршрута",
    link: "/create-route",
    show: false,
    back: true,
  },
  {
    title: "Маршрут",
    link: "/info-route",
    show: false,
    back: true,
  },
  {
    title: "Редактирование маршруа",
    link: "/edit-route",
    show: false,
    back: true,
  },
];
