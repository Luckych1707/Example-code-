import { Select as MainSelect } from "antd";

import { SelectController } from "./SelectController";

export const Select = Object.assign(MainSelect, {
  Controller: SelectController,
});
