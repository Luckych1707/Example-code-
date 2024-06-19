import { useQuery } from "@tanstack/react-query";
import { List } from "antd";
import { useEffect, useState } from "react";

import { CategoryCard } from "@/entities/Category";
import { getCategoriesList } from "@/shared/api/handBooks/queries/getCategories";
import { usePagination } from "@/shared/helpers/hooks/usePagination";
import { DEFAULT_SEARCH_PARAMS } from "@/widgets/Category/constants/constants";

export const CategoryList = () => {
  const { limit, skip, handleListChange, tableParams, setTableParams } =
    usePagination({
      path: "/categories",
    });

  const [editCategoryId, setEditCategoryId] = useState<string | undefined>();
  const [deleteCategoryId, setDeleteCategoryId] = useState<
    string | undefined
  >();

  const { data } = useQuery({
    ...getCategoriesList.getQueryOptions({
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
    <List
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
        <List.Item>
          <CategoryCard
            category={item}
            editCategoryId={editCategoryId}
            setEditCategoryId={setEditCategoryId}
            deleteCategoryId={deleteCategoryId}
            setDeleteCategoryId={setDeleteCategoryId}
          />
        </List.Item>
      )}
    />
  );
};
