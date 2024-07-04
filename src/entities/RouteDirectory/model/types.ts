import {
  Control,
  FormState,
  type UseFieldArrayMove,
  UseFormSetValue,
  type UseFormWatch,
} from "react-hook-form";

import { CreateRouteFormValues } from "@/features/AddRoute/model/types";

export type WaypointProps = {
  waypoint: Record<"id", string>;
  index: number;
  formState: FormState<CreateRouteFormValues>;
  control: Control<CreateRouteFormValues> | undefined;
  remove: (index: number) => void;
  setValue: UseFormSetValue<CreateRouteFormValues>;
  watch: UseFormWatch<CreateRouteFormValues>;
  length: number;
  move: UseFieldArrayMove;
  isAllClosed: boolean;
};

export type MaterialProps = {
  waypointIndex: number;
};
