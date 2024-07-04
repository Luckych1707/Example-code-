import { Flex, Select, Typography } from "antd";
import { Controller, FieldPath, FieldValues } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { SelectControllerProps } from "./types";

export const SelectController = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  label,
  options,
  mode,
  placeholder,
  isError,
  ...props
}: SelectControllerProps<TFieldValues, TName>) => {
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
            <Select
              {...field}
              options={options}
              mode={mode}
              placeholder={placeholder}
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
