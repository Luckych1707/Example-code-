import { Upload as MainUpload } from "antd";

import { UploadController } from "./UploadController";

export const Upload = Object.assign(MainUpload, {
  Controller: UploadController,
});
