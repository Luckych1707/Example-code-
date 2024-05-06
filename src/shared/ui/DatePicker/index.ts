import { DatePicker as MainDatePicker } from "antd";

import { DatePickerController } from "@/shared/ui/DatePicker/DatePickerController";

export const DatePicker = Object.assign(MainDatePicker, {
  Controller: DatePickerController,
});
