import { useQuery } from "@tanstack/react-query";
import { useSearch } from "@tanstack/react-router";
import { Flex, List } from "antd";
import { useEffect } from "react";

import { RouteDirectoryCard } from "@/entities/RouteDirectory";
import { getRoutesList } from "@/shared/api/handBooks/queries/getRoutes";
import { SortOrders } from "@/shared/api/schemas";
import { usePagination } from "@/shared/helpers/hooks/usePagination";
import { DEFAULT_SEARCH_PARAMS } from "@/widgets/RouteDirectory/constants/constants";

export const RouteDirectoryList = () => {
  const search = useSearch({ from: "/routes" });

  const { limit, skip, handleListChange, tableParams, setTableParams } =
    usePagination({
      path: "/routes",
    });

  const { data } = useQuery({
    ...getRoutesList.getQueryOptions(
      { limit: limit, skip: skip, order: search.order as SortOrders },
      {
        search: search.search,
      },
    ),
  });

  useEffect(() => {
    if (data?.items && tableParams.pagination?.total !== data.count) {
      setTableParams((prevState) => ({
        ...prevState,
        pagination: { ...prevState.pagination, total: data.count },
      }));
    }
  }, [data, setTableParams, tableParams.pagination?.total]);

  return (
    <Flex vertical>
      <List
        pagination={{
          position: "bottom",
          align: "start",
          onChange: (page) =>
            handleListChange(page, DEFAULT_SEARCH_PARAMS.limit, data?.count),
          current:
            tableParams.pagination?.current || DEFAULT_SEARCH_PARAMS.page,
          pageSize:
            tableParams.pagination?.pageSize || DEFAULT_SEARCH_PARAMS.limit,
          total: tableParams.pagination?.total,
        }}
        dataSource={data?.items}
        renderItem={(item) => (
          <List.Item>
            <RouteDirectoryCard route={item} />
          </List.Item>
        )}
      />
    </Flex>
  );
};
