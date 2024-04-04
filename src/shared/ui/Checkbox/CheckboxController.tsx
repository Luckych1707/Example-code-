import { Checkbox, Flex } from "antd";
import { Controller, FieldPath, FieldValues } from "react-hook-form";

import { CheckboxControllerProps } from "./types";

export const CheckboxController = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  label,
  ...props
}: CheckboxControllerProps<TFieldValues, TName>) => {
  return (
    <Controller
      {...props}
      render={({ field }) => {
        return (
          <Flex vertical gap="4px" style={{ width: "100%" }}>
            <Checkbox {...field} checked={field.value}>
              {label}
            </Checkbox>
          </Flex>
        );
      }}
    />
  );
};
