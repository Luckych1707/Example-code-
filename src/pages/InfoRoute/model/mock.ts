export type RouteType = {
  id: string;
  name: string;
  city: string;
  files: string[];
  category: string;
  description: string;
  waypoint: WaypointType[];
  kmDuration: string;
  hourDuration: string;
  price: string;
};

export type WaypointType = {
  name: string;
  photoFiles: string[];
  audioFiles: string[];
  description: string;
  longitude: string;
  latitude: string;
  material: MaterialType[];
};

export type MaterialType = { name: string; yer: string; description: string };

export const InfoRouteMock: RouteType[] = [
  {
    id: "1",
    name: "Космические выходные в Калуге",
    city: "Калуга",
    category: "Космос",
    hourDuration: "1 час(ов)",
    price: "399",
    kmDuration: "5 км",
    files: [
      "https://sun9-65.userapi.com/impg/10ZHi4NRLw6HUygbk-yJoisXG2jqJJXfMsCS9A/nPskpenZCCk.jpg?size=897x1051&quality=96&sign=86588911624d66baca57cfa4e1697ae7&type=album",
      "https://sun9-65.userapi.com/impg/10ZHi4NRLw6HUygbk-yJoisXG2jqJJXfMsCS9A/nPskpenZCCk.jpg?size=897x1051&quality=96&sign=86588911624d66baca57cfa4e1697ae7&type=album",
      "https://sun9-65.userapi.com/impg/10ZHi4NRLw6HUygbk-yJoisXG2jqJJXfMsCS9A/nPskpenZCCk.jpg?size=897x1051&quality=96&sign=86588911624d66baca57cfa4e1697ae7&type=album",
    ],
    description:
      "Новый комплекс музея истории космонавтики приглашает в гости на поистине космическую экскурсию! С этим музеем может соперничать только музей НАСА в далеком Хьюстоне, и это вполне справедливо: ознакомившись с уникальной экспозицией, симуляторами и уникальными инсталляциями, вы легко в этом убедитесь. А завесу будущего космонавтики, кстати, вам",
    waypoint: [
      {
        name: "Государственный музей истории космонавтики имени К.Э. Циолковского",
        photoFiles: [
          "https://sun9-65.userapi.com/impg/10ZHi4NRLw6HUygbk-yJoisXG2jqJJXfMsCS9A/nPskpenZCCk.jpg?size=897x1051&quality=96&sign=86588911624d66baca57cfa4e1697ae7&type=album",
          "https://sun9-65.userapi.com/impg/10ZHi4NRLw6HUygbk-yJoisXG2jqJJXfMsCS9A/nPskpenZCCk.jpg?size=897x1051&quality=96&sign=86588911624d66baca57cfa4e1697ae7&type=album",
          "https://sun9-65.userapi.com/impg/10ZHi4NRLw6HUygbk-yJoisXG2jqJJXfMsCS9A/nPskpenZCCk.jpg?size=897x1051&quality=96&sign=86588911624d66baca57cfa4e1697ae7&type=album",
        ],
        audioFiles: ["name1", "name2", "name3"],
        description:
          "Новый комплекс музея истории космонавтики приглашает в гости на поистине космическую экскурсию!",
        longitude: "55.75",
        latitude: "37.616667",
        material: [
          {
            name: "Горе от ума",
            yer: "1825",
            description: "Комедия в стихах Александра Сергеевича Грибоедова.",
          },
          {
            name: "Горе от ума",
            yer: "1825",
            description: "Комедия в стихах Александра Сергеевича Грибоедова.",
          },
          {
            name: "Горе от ума",
            yer: "1825",
            description: "Комедия в стихах Александра Сергеевича Грибоедова.",
          },
        ],
      },
    ],
  },
];
