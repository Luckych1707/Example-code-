import { DatePicker, Flex, Typography } from "antd";
import { Controller, FieldPath, FieldValues } from "react-hook-form";

import { DatePickerControllerProps } from "./types";

export const DatePickerController = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  label,
  placeholder,
  ...props
}: DatePickerControllerProps<TFieldValues, TName>) => {
  return (
    <Controller
      {...props}
      render={({ field }) => {
        return (
          <Flex vertical gap="4px" style={{ width: "100%" }}>
            {label && (
              <Flex>
                <Typography.Text>{label}</Typography.Text>
                {props.rules?.required && (
                  <Typography.Text style={{ color: "red" }}>*</Typography.Text>
                )}
              </Flex>
            )}
            <DatePicker {...field} placeholder={placeholder} />
          </Flex>
        );
      }}
    />
  );
};
