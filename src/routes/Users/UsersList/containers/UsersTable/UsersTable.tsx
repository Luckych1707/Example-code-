import { useQuery } from "@tanstack/react-query";
import { Table } from "antd";
import { useEffect } from "react";

import { getUsers } from "@/api/queries/getUsers";
import { usePagination } from "@/hooks/usePagination";
import { useUsersColumns } from "@/routes/Users/UsersList/containers/UsersTable/hooks";

export const UsersTable = () => {
  const { limit, offset, tableParams, handleTableChange, setTableParams } =
    usePagination({ path: "/users" });

  const { data, isLoading } = useQuery({
    ...getUsers.getQueryOptions({
      offset: offset,
      limit: limit,
    }),
  });

  useEffect(() => {
    if (data?.result && tableParams.pagination?.total !== data.result.count) {
      setTableParams((prevState) => ({
        ...prevState,
        pagination: { ...prevState.pagination, total: data?.result?.count },
      }));
    }
  }, [data, setTableParams, tableParams.pagination?.total]);

  const users = data?.result?.items;

  const columns = useUsersColumns();

  return (
    <Table
      style={{ width: "100%" }}
      dataSource={users || []}
      pagination={tableParams.pagination}
      columns={columns}
      onChange={handleTableChange}
      loading={isLoading}
    />
  );
};
