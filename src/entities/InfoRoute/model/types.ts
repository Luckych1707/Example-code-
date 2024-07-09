import { WaypointResponse } from "@/shared/api/schemas";

export type WaypointProps = {
  item: WaypointResponse;
  index: number;
  isAllClosed: boolean;
};
