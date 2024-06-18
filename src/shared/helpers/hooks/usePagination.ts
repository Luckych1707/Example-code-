import { useNavigate, useSearch } from "@tanstack/react-router";
import { useState } from "react";

interface TableParams {
  pagination?: {
    current?: number;
    pageSize?: number;
    total: number;
  };
}

type Props = {
  path: "/feedback" | "/categories" | "/cities" | "/routes";
};

export const usePagination = ({ path }: Props) => {
  const navigate = useNavigate({ from: path });

  const search = useSearch({ from: path });

  const { limit, page }: { limit: number; page: number } = useSearch({
    strict: false,
  });

  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: page || 1,
      pageSize: limit || 5,
      total: 0,
    },
  });

  const handleListChange = async (
    page?: number,
    limit?: number,
    total?: number,
  ) => {
    await navigate({
      search: () => ({
        ...search,
        page: page || 1,
        limit: limit || 5,
      }),
    });

    setTableParams({
      pagination: {
        current: page || 1,
        pageSize: limit || 5,
        total: total || 0,
      },
    });
  };

  return {
    limit: tableParams?.pagination?.pageSize || 10,
    skip:
      ((tableParams?.pagination?.current || 1) - 1) *
      (tableParams?.pagination?.pageSize || 0),
    tableParams: tableParams,
    setTableParams,
    handleListChange,
  };
};
