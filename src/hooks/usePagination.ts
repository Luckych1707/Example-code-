import { useNavigate, useSearch } from "@tanstack/react-router";
import type { GetProp, TableProps } from "antd";
import { useState } from "react";

type TablePaginationConfig = Exclude<
  GetProp<TableProps, "pagination">,
  boolean
>;

interface TableParams {
  pagination?: TablePaginationConfig;
}

type Props = {
  path: "/trainers" | "/users" | "/admins";
};

export const usePagination = ({ path }: Props) => {
  const navigate = useNavigate({ from: path });

  const { limit, page }: { limit: number; page: number } = useSearch({
    strict: false,
  });

  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: page || 1,
      pageSize: limit || 10,
      total: 0,
    },
  });

  const handleTableChange: TableProps["onChange"] = (pagination) => {
    navigate({
      search: () => ({
        page: pagination.current || 0,
        limit: pagination?.pageSize || 10,
      }),
    });

    setTableParams({
      pagination,
    });
  };

  return {
    limit: tableParams?.pagination?.pageSize || 10,
    offset:
      ((tableParams?.pagination?.current || 1) - 1) *
      (tableParams?.pagination?.pageSize || 0),
    tableParams: tableParams,
    setTableParams,
    handleTableChange,
  };
};
