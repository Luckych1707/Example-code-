export type Route = {
  name: string;
  city: string;
  category: string;
};

export type RouteDirectoryType = {
  id: string;
  name: string;
  image: string;
  city: string;
  description: string;
  cost: string;
  routes: Route[];
};
