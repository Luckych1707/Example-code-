import { ControllerProps, FieldPath, FieldValues } from "react-hook-form";

export interface UploadControllerProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends Omit<ControllerProps<TFieldValues, TName>, "render"> {
  accept?: string;
  label?: string;
  uri?: string[];
  audio?: { name: string; uri: string };
  secondaryLabel?: string;
  listType?: "text" | "picture" | "picture-card" | "picture-circle";
  maxFileLength?: number;
  canClear?: boolean;
  reset?: (value?: { uid: string; uriPreview?: string }) => void;
  width?: number;
  height?: number;
  isError?: string;
}
