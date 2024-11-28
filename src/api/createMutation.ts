import { UseMutationOptions } from "@tanstack/react-query";

type CreateMutationOptions<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TParams = any,
  TData = unknown,
> = {
  request: (meta: { token?: string }, params: TParams) => Promise<TData>;
};

export const createMutation = <
  TError = Error,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TParams = any,
  TData = unknown,
>(
  options: CreateMutationOptions<TParams, TData>,
) => {
  const request = (params: TParams) => options.request({}, params);

  const getMutationOptions = (): UseMutationOptions<
    TData,
    TError,
    TParams
  > => ({
    mutationFn: request,
    // @ts-expect-error typescript unused vars
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onError: (error: TError) => void 0,
  });

  return Object.assign(request, {
    getMutationOptions,
    withMeta: options.request,
  });
};
