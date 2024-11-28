import { Button, Flex } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { CreateTrainerDrawer } from "./containers/CreateTrainerDrawer";
import { EditTrainerDrawer } from "./containers/EditTrainerDrawer";
import { TrainersInfoDrawer } from "./containers/TrainersInfoDrawer";
import { TrainersTable } from "./containers/TrainersTable";

const TrainersList = () => {
  const { t } = useTranslation("p_trainersList");

  const [selectedTrainerViewId, setSelectedTrainerViewId] = useState<
    string | undefined
  >(undefined);
  const [isCreateTrainerDrawerOpen, setIsCreateTrainerDrawerOpen] =
    useState(false);
  const [selectedTrainerEditId, setSelectedTrainerEditId] = useState<
    string | undefined
  >(undefined);

  return (
    <Flex vertical>
      <Flex justify="flex-end" style={{ padding: "24px" }}>
        <Button
          type="primary"
          onClick={() => setIsCreateTrainerDrawerOpen(true)}
        >
          {t("createTrainerButton")}
        </Button>
      </Flex>
      <TrainersTable
        onTrainerClick={setSelectedTrainerViewId}
        onEditClick={setSelectedTrainerEditId}
      />
      {selectedTrainerViewId && (
        <TrainersInfoDrawer
          isOpen={!!selectedTrainerViewId}
          id={selectedTrainerViewId}
          onClose={() => setSelectedTrainerViewId(undefined)}
        />
      )}
      {isCreateTrainerDrawerOpen && (
        <CreateTrainerDrawer
          isOpen={isCreateTrainerDrawerOpen}
          onClose={() => setIsCreateTrainerDrawerOpen(false)}
        />
      )}
      {selectedTrainerEditId && (
        <EditTrainerDrawer
          isOpen={!!selectedTrainerEditId}
          id={selectedTrainerEditId}
          onClose={() => setSelectedTrainerEditId(undefined)}
        />
      )}
    </Flex>
  );
};

export default TrainersList;
