import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useMatch } from "@tanstack/react-router";
import { Table } from "antd";
import { useEffect } from "react";

import { deleteBooking } from "@/api/mutation/deleteBooking";
import { getBookings } from "@/api/queries/getBookings";
import { usePagination } from "@/hooks/usePagination";
import { useBookingsColumns } from "@/routes/Users/User/containers/BookingsTable/hooks";

interface Props {
  onTrainerClick: (id: string) => void;
  onBookingEditClick: (id: string) => void;
}

export const BookingsTable = ({
  onTrainerClick,
  onBookingEditClick,
}: Props) => {
  const { params } = useMatch({ from: "/user/$id" });

  const queryClient = useQueryClient();

  const { limit, offset, tableParams, handleTableChange, setTableParams } =
    usePagination({ path: "/users" });

  const { data: data, isLoading } = useQuery({
    ...getBookings.getQueryOptions(params.id || "", { offset, limit }),
  });

  const deleteBookingMutation = useMutation({
    ...deleteBooking.getMutationOptions(),
    onSuccess: async () => {
      await queryClient.refetchQueries({
        queryKey: [getBookings.queryName],
      });
    },
  });

  const handleDeleteBooking = (id: string) => {
    deleteBookingMutation.mutate(id);
  };

  useEffect(() => {
    if (data?.result && tableParams.pagination?.total !== data.result.count) {
      setTableParams((prevState) => ({
        ...prevState,
        pagination: { ...prevState.pagination, total: data?.result?.count },
      }));
    }
  }, [data]);

  const bookings = data?.result?.items;

  const columns = useBookingsColumns({
    onTrainerClick,
    onBookingEditClick,
    handleDeleteBooking,
  });

  return (
    <Table
      dataSource={bookings || []}
      pagination={tableParams.pagination}
      columns={columns}
      onChange={handleTableChange}
      loading={isLoading}
    />
  );
};
