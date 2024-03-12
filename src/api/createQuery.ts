import {
  QueryFunction,
  UndefinedInitialDataOptions,
} from "@tanstack/react-query";
import { GenericAbortSignal } from "axios";

type CreateQueryOptions<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TParams extends any[] = any[],
  TData = unknown,
  TQueryName extends string = string,
> = {
  request: (
    meta: { token?: string; signal?: GenericAbortSignal },
    ...params: TParams
  ) => Promise<TData>;
  name: TQueryName;
};

export const createQuery = <
  TError = Error,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TParams extends any[] = any[],
  TData = unknown,
  TQueryName extends string = string,
>(
  options: CreateQueryOptions<TParams, TData, TQueryName>,
) => {
  const getQueryKey = (...params: TParams) =>
    [options.name, ...params] as const;

  const queryFn: QueryFunction<TData, ReturnType<typeof getQueryKey>> = (
    queryContext,
  ) => {
    const token = queryContext.meta?.token;

    return options.request(
      { token: token ? `${token}` : undefined, signal: queryContext.signal },
      ...(queryContext.queryKey.slice(1) as TParams),
    );
  };

  type QueryOptions = UndefinedInitialDataOptions<
    TData,
    TError,
    TData,
    ReturnType<typeof getQueryKey>
  >;

  const getQueryOptions = (
    ...params: TParams
  ): Pick<QueryOptions, "queryFn" | "queryKey"> &
    Omit<Partial<QueryOptions>, "queryFn" | "queryKey"> => ({
    queryFn,
    queryKey: getQueryKey(...params),
  });

  const request = (...params: TParams) => options.request({}, ...params);

  return Object.assign(request, {
    queryName: options.name,
    getQueryKey,
    getQueryOptions,
    withMeta: options.request,
  });
};
