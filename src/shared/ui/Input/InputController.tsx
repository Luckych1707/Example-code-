import { Flex, Input, Typography } from "antd";
import { Controller, FieldPath, FieldValues } from "react-hook-form";

import { InputControllerProps } from "./types";

export const InputController = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  label,
  placeholder,
  prefix,
  ...props
}: InputControllerProps<TFieldValues, TName>) => {
  return (
    <Controller
      {...props}
      render={({ field }) => {
        return (
          <Flex vertical gap="4px" style={{ width: "100%" }}>
            {label && <Typography.Text>{label}</Typography.Text>}
            <Input {...field} placeholder={placeholder} prefix={prefix} />
          </Flex>
        );
      }}
    />
  );
};
