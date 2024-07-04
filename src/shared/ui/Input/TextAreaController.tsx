import { Flex, Input, Typography } from "antd";
import { Controller, FieldPath, FieldValues } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { TextAreaControllerProps } from "./types";

export const TextAreaController = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  label,
  placeholder,
  autoSize,
  isError,
  ...props
}: TextAreaControllerProps<TFieldValues, TName>) => {
  const { t } = useTranslation("glossary");

  const isRequiredError = isError === "required";

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
            <Input.TextArea
              {...field}
              placeholder={placeholder}
              autoSize={autoSize}
              status={isRequiredError ? "error" : ""}
            />
            {isRequiredError && (
              <Typography.Text type="danger">
                {t("error.required")}
              </Typography.Text>
            )}
          </Flex>
        );
      }}
    />
  );
};
