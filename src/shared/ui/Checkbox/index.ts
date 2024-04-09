import { Checkbox as MainCheckbox } from "antd";

import { CheckboxController } from "./CheckboxController";

export const Checkbox = Object.assign(MainCheckbox, {
  Controller: CheckboxController,
});
