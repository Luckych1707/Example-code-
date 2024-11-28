import { useQuery } from "@tanstack/react-query";
import { Table } from "antd";
import { useEffect } from "react";

import { getAdmins } from "@/api/queries/getAdmins";
import { usePagination } from "@/hooks/usePagination";
import { useAdminsColumns } from "@/routes/Admins/AdminList/containers/AdminsTable/hooks";

export const AdminsTable = () => {
  const { limit, offset, tableParams, handleTableChange, setTableParams } =
    usePagination({ path: "/admins" });

  const { data, isLoading } = useQuery({
    ...getAdmins.getQueryOptions({
      offset: offset,
      limit: limit,
    }),
  });

  useEffect(() => {
    if (data?.result && tableParams?.pagination?.total !== data.result.count) {
      setTableParams((prevState) => ({
        ...prevState,
        pagination: { ...prevState.pagination, total: data?.result?.count },
      }));
    }
  }, [data, setTableParams, tableParams?.pagination?.total]);

  const admins = data?.result?.items;

  const columns = useAdminsColumns();

  return (
    <Table
      dataSource={admins || []}
      pagination={tableParams.pagination}
      columns={columns}
      onChange={handleTableChange}
      loading={isLoading}
    />
  );
};
