import { Button, Popconfirm, Space, Tooltip, Typography } from "antd";
import { ColumnsType } from "antd/es/table";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import { TrainerSchema } from "@/api/schemas";

interface Props {
  onTrainerClick: (id: string) => void;
  onEditClick: (id: string) => void;
  handleDeleteTrainers: (id: string) => void;
  handleRestoreTrainers: (id: string) => void;
}
export const useTrainersColumns = ({
  onTrainerClick,
  onEditClick,
  handleDeleteTrainers,
  handleRestoreTrainers,
}: Props) => {
  const { t } = useTranslation(["p_trainersList", "glossary"]);

  return useMemo<ColumnsType<TrainerSchema>>(
    () => [
      {
        title: `${t("trainerTable.columnName.name")}`,
        width: "35%",
        render: ({ firstName, lastName, id }) => {
          const fullName = [lastName, firstName].filter(Boolean).join(" ");
          return (
            <Typography.Text
              style={{ cursor: "pointer" }}
              onClick={() => onTrainerClick(id)}
            >
              {fullName.length > 40 ? (
                <Tooltip title={fullName}>
                  {fullName.slice(0, 40).concat("...")}
                </Tooltip>
              ) : (
                fullName
              )}
            </Typography.Text>
          );
        },
      },
      {
        title: `${t("trainerTable.columnName.country")}`,
        width: "25%",
        render: ({ country }) => (
          <Typography.Text>{country.name}</Typography.Text>
        ),
      },
      {
        title: `${t("trainerTable.columnName.subscription")}`,
        width: "25%",
        render: ({ subscription }) => (
          <Typography.Text>{subscription?.name}</Typography.Text>
        ),
      },
      {
        title: `${t("trainerTable.columnName.actions")}`,
        render: ({ id, deletedAt }) => (
          <Space size="middle">
            {!deletedAt ? (
              <Popconfirm
                title={t(
                  "trainerTable.actionsButton.deleteTrainerPopconfirm.title",
                )}
                description={t(
                  "trainerTable.actionsButton.deleteTrainerPopconfirm.text",
                )}
                onConfirm={() => handleDeleteTrainers(id)}
                okText={t("glossary:actions.submit")}
                cancelText={t("glossary:actions.cancel")}
              >
                <Button type="link">
                  {t("trainerTable.actionsButton.archive")}
                </Button>
              </Popconfirm>
            ) : (
              <Popconfirm
                title={t(
                  "trainerTable.actionsButton.restoreTrainerPopconfirm.title",
                )}
                description={t(
                  "trainerTable.actionsButton.restoreTrainerPopconfirm.text",
                )}
                onConfirm={() => handleRestoreTrainers(id)}
                okText={t("glossary:actions.submit")}
                cancelText={t("glossary:actions.cancel")}
              >
                <Button type="link">
                  {t("trainerTable.actionsButton.unArchive")}
                </Button>
              </Popconfirm>
            )}

            <Button type="link" onClick={() => onEditClick(id)}>
              {t("trainerTable.actionsButton.edit")}
            </Button>
          </Space>
        ),
      },
    ],
    [onEditClick, onTrainerClick, t],
  );
};
