import { ControllerProps, FieldPath, FieldValues } from "react-hook-form";

export interface SelectControllerProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends Omit<ControllerProps<TFieldValues, TName>, "render"> {
  label?: string;
  options?: { label: string; value: string }[];
}
