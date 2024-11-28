import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Table } from "antd";
import { useEffect } from "react";

import { deleteTrainer } from "@/api/mutation/deleteTrainer";
import { restoreTrainer } from "@/api/mutation/restoreTrainer";
import { getAllTrainers } from "@/api/queries/getAllTraines";
import { usePagination } from "@/hooks/usePagination";

import { useTrainersColumns } from "./hooks";

interface Trainers {
  onTrainerClick: (id: string) => void;
  onEditClick: (id: string) => void;
}

export const TrainersTable = ({ onTrainerClick, onEditClick }: Trainers) => {
  const queryClient = useQueryClient();

  const { limit, offset, tableParams, handleTableChange, setTableParams } =
    usePagination({ path: "/trainers" });

  const { data, isLoading } = useQuery({
    ...getAllTrainers.getQueryOptions({
      offset: offset,
      limit: limit,
    }),
    retry: false,
  });

  const restoreTrainerMutation = useMutation({
    ...restoreTrainer.getMutationOptions(),
    onSuccess: async () => {
      await queryClient.refetchQueries({
        queryKey: [getAllTrainers.queryName],
      });
    },
  });

  const deleteTrainerMutation = useMutation({
    ...deleteTrainer.getMutationOptions(),
    onSuccess: async () => {
      await queryClient.refetchQueries({
        queryKey: [getAllTrainers.queryName],
      });
    },
  });

  useEffect(() => {
    if (data?.result && tableParams.pagination?.total !== data.result.count) {
      setTableParams((prevState) => ({
        ...prevState,
        pagination: { ...prevState.pagination, total: data?.result?.count },
      }));
    }
  }, [data, setTableParams, tableParams.pagination?.total]);

  const handleDeleteTrainers = (id: string) => {
    deleteTrainerMutation.mutate(id);
  };

  const handleRestoreTrainers = (id: string) => {
    restoreTrainerMutation.mutate(id);
  };

  const trainer = data?.result?.items;

  const columns = useTrainersColumns({
    onTrainerClick,
    onEditClick,
    handleDeleteTrainers,
    handleRestoreTrainers,
  });

  return (
    <Table
      dataSource={trainer || []}
      columns={columns}
      pagination={tableParams.pagination}
      onChange={handleTableChange}
      loading={isLoading}
    />
  );
};
