import { useQuery } from "@tanstack/react-query";
import { useSearch } from "@tanstack/react-router";
import { List as AntList } from "antd";
import keys from "lodash/keys";
import pickBy from "lodash/pickBy";
import { useEffect, useMemo } from "react";

import { FeedbackCard } from "@/entities/Feedback";
import { getFeedbackList } from "@/shared/api/handBooks/queries/getFeedbacks";
import { FeedbackStatus, SortOrders } from "@/shared/api/schemas";
import { usePagination } from "@/shared/helpers/hooks/usePagination";
import { DEFAULT_SEARCH_PARAMS } from "@/widgets/Feedback/constants/constants";
import { ListProps } from "@/widgets/Feedback/model/types";

export const List = ({ setFeedbackItemId, setIsOpen }: ListProps) => {
  const search = useSearch({ from: "/feedback" });

  const { limit, skip, handleListChange, tableParams, setTableParams } =
    usePagination({
      path: "/feedback",
    });

  const filters = useMemo(() => {
    const status = keys(
      pickBy(
        search,
        (value, key) => ["new", "processed", "viewed"].includes(key) && !!value,
      ),
    ) as FeedbackStatus[];

    return { status };
  }, [search]);

  const { data } = useQuery({
    ...getFeedbackList.getQueryOptions(
      { limit: limit, skip: skip, order: search.order as SortOrders },
      { filters: filters.status.length !== 0 ? filters : {} },
    ),
    staleTime: 0,
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
          <FeedbackCard
            setFeedbackItemId={setFeedbackItemId}
            reviews={item}
            setIsOpen={setIsOpen}
          />
        </AntList.Item>
      )}
    />
  );
};
