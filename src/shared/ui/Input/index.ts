import { Input as MainInput } from "antd";
import TextArea from "antd/es/input/TextArea";

import { TextAreaController } from "@/shared/ui/Input/TextAreaController";

import { InputController } from "./InputController";

export const Input = Object.assign(MainInput, {
  TextArea: Object.assign(TextArea, {
    Controller: TextAreaController,
  }),
  Controller: InputController,
});
