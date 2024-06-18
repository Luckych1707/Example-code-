import { UploadFile } from "antd";

export type CreateRouteFormValues = {
  name: string;
  cityId: string;
  categoryId: string;
  description: string;
  image?: { file: UploadFile; fileList: UploadFile[] };
  waypoint: {
    name: string;
    description: string;
    longitude: string;
    latitude: string;
    waypointImage?: { file: UploadFile; fileList: UploadFile[] };
    audio?: { file: UploadFile; fileList: UploadFile[] };
    material: { name: string; year: number; description: string }[];
  }[];
  durationDistance: string;
  durationTime: string;
  price: string;
};
