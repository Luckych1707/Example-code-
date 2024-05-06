import { Flex, Select, Typography } from "antd";
import { Controller, FieldPath, FieldValues } from "react-hook-form";

import { SelectControllerProps } from "./types";

export const SelectController = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  label,
  options,
  mode,
  placeholder,
  ...props
}: SelectControllerProps<TFieldValues, TName>) => {
  return (
    <Controller
      {...props}
      render={({ field }) => {
        return (
          <Flex vertical gap="4px" style={{ width: "100%" }}>
            {label && <Typography.Text>{label}</Typography.Text>}
            <Select
              {...field}
              options={options}
              mode={mode}
              placeholder={placeholder}
            />
          </Flex>
        );
      }}
    />
  );
};
