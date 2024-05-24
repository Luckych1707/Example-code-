import { WaypointType } from "@/pages/InfoRoute/model/mock";

export type WaypointProps = {
  item: WaypointType;
  index: number;

  isAllClosed: boolean;
  setIsAllClosed: () => void;
};
