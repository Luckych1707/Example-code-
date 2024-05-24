export type CreateRouteFormValues = {
  name: string;
  city: string;
  categories: string[];
  description: string;
  waypoint: {
    name: string;
    description: string;
    longitude: string;
    latitude: string;
    material: { name: string; yer: string; description: string }[];
  }[];
  kmDuration: string;
  hourDuration: string;
  price: string;
};
