type Nullable<T> = T | null | undefined;

export const isDefined = <T>(element: Nullable<T>): element is NonNullable<T> =>
  element != null;
