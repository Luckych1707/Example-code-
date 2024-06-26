import { UploadFile } from "antd";

export type CreateRouteFormValues = {
  name: string;
  cityId: string;
  categoryId: string;
  description: string;
  image?: { file: UploadFile; fileList: UploadFile[] };
  waypoint: {
    waypointId: string;
    order: number;
    name: string;
    description: string;
    longitude: string;
    latitude: string;
    waypointImage?: { file: UploadFile; fileList: UploadFile[] };
    waypointImagePreview?: { uri: string; id: string }[];
    audio?: { file: UploadFile; fileList: UploadFile[] };
    audioPreview?: { uri: string; name: string };
    material: { name: string; year: number; description: string }[];
  }[];
  durationDistance: string;
  durationTime: string;
  price: string;
};
