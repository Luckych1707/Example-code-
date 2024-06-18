import { UploadFile } from "antd";

import { CityResponse } from "@/shared/api/schemas";

export type CityInfoType = {
  city?: CityResponse;
  setCityVariant: (variant: string | undefined) => void;
  cityVariant: string;
  onClose: () => void;
};

export type CityEditType = {
  city?: CityResponse;
  setCityVariant: (variant: string | undefined) => void;
  onClose: () => void;
};

export type CityEditValues = {
  name: string;
  image?: { file: UploadFile; fileList: UploadFile[] };
  description: string;
};
