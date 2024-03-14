import { Input as MainInput } from "antd";

import { InputController } from "./InputController";

export const Input = Object.assign(MainInput, {
  Controller: InputController,
});
