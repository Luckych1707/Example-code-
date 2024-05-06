import { Flex, Input, Typography } from "antd";
import { Controller, FieldPath, FieldValues } from "react-hook-form";

import { TextAreaControllerProps } from "./types";

export const TextAreaController = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  label,
  placeholder,
  ...props
}: TextAreaControllerProps<TFieldValues, TName>) => {
  return (
    <Controller
      {...props}
      render={({ field }) => {
        return (
          <Flex vertical gap="4px" style={{ width: "100%" }}>
            {label && <Typography.Text>{label}</Typography.Text>}
            <Input.TextArea
              {...field}
              placeholder={placeholder}
              autoSize={true}
            />
          </Flex>
        );
      }}
    />
  );
};
