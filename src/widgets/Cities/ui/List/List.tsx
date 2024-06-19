import { useQuery } from "@tanstack/react-query";
import { List as AntList } from "antd";
import { useEffect } from "react";

import { CitiesCard } from "@/entities/Cities";
import { getCitiesList } from "@/shared/api/handBooks/queries/getCities";
import { usePagination } from "@/shared/helpers/hooks/usePagination";
import { ListProps } from "@/widgets/Cities/model/types";
import { DEFAULT_SEARCH_PARAMS } from "@/widgets/Feedback/constants/constants";

export const List = ({ setSelectedCity }: ListProps) => {
  const { limit, skip, handleListChange, tableParams, setTableParams } =
    usePagination({
      path: "/cities",
    });

  const { data } = useQuery({
    ...getCitiesList.getQueryOptions({
      limit: limit,
      skip: skip,
    }),
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
    <AntList
      pagination={{
        position: "bottom",
        align: "start",
        onChange: (page) =>
          handleListChange(page, DEFAULT_SEARCH_PARAMS.limit, data?.count),
        current: tableParams.pagination?.current || DEFAULT_SEARCH_PARAMS.page,
        pageSize:
          tableParams.pagination?.pageSize || DEFAULT_SEARCH_PARAMS.limit,
        total: tableParams.pagination?.total,
      }}
      dataSource={data?.items}
      renderItem={(item) => (
        <AntList.Item>
          <CitiesCard cities={item} setSelectedCity={setSelectedCity} />
        </AntList.Item>
      )}
    />
  );
};
