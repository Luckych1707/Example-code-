import { Flex } from "antd";
import { useState } from "react";

import { TrainersInfoDrawer } from "@/routes/TrainersList/containers/TrainersInfoDrawer";
import { BookingsTable } from "@/routes/Users/User/containers/BookingsTable";
import { EditBookingDrawer } from "@/routes/Users/User/containers/EditBookingDrawer";
import { UserInfo } from "@/routes/Users/User/containers/UserInfo";

const User = () => {
  const [trainerId, setTrainerId] = useState<string | undefined>();
  const [bookingEditId, setBookingEditId] = useState<string | undefined>();

  return (
    <Flex vertical>
      <UserInfo />

      <BookingsTable
        onTrainerClick={setTrainerId}
        onBookingEditClick={setBookingEditId}
      />

      {trainerId && (
        <TrainersInfoDrawer
          isOpen={!!trainerId}
          id={trainerId}
          onClose={() => setTrainerId(undefined)}
        />
      )}

      {bookingEditId && (
        <EditBookingDrawer
          bookingId={bookingEditId}
          onClose={() => setBookingEditId(undefined)}
          isOpen={!!bookingEditId}
        />
      )}
    </Flex>
  );
};

export default User;
