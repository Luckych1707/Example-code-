import React from "react";
import { ControllerProps, FieldPath, FieldValues } from "react-hook-form";

export interface InputControllerProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends Omit<ControllerProps<TFieldValues, TName>, "render"> {
  label?: string;
  placeholder?: string;
  prefix?: React.ReactNode;
}
