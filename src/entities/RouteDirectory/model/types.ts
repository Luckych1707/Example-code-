import {
  Control,
  type UseFieldArrayMove,
  type UseFormWatch,
} from "react-hook-form";

import { CreateRouteFormValues } from "@/features/AddRoute/model/types";
import { RouteDirectoryType } from "@/widgets/RouteDirectory/model/types";

export type RouteDirectoryCardProps = { route: RouteDirectoryType };

export type WaypointProps = {
  waypoint: Record<"id", string>;
  index: number;
  control: Control<CreateRouteFormValues> | undefined;
  remove: (index: number) => void;
  watch: UseFormWatch<CreateRouteFormValues>;
  length: number;
  move: UseFieldArrayMove;
  isAllClosed: boolean;
  setIsAllClosed: () => void;
};

export type MaterialProps = {
  waypointIndex: number;
};
