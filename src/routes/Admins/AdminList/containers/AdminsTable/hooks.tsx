import { Tooltip, Typography } from "antd";
import { ColumnsType } from "antd/es/table";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import { UserSchema } from "@/api/schemas";

import { DeleteAdmin } from "../DeleteAdmin";

export const useAdminsColumns = () => {
  const { t } = useTranslation("p_usersList");

  return useMemo<ColumnsType<UserSchema>>(
    () => [
      {
        title: t("admin.adminsTable.columnName.name"),
        width: "40%",
        render: ({ firstName, lastName }) => {
          const fullName = [lastName, firstName].filter(Boolean).join(" ");
          return (
            <Typography.Text style={{ cursor: "pointer" }}>
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
        title: t("admin.adminsTable.columnName.mail"),
        width: "40%",
        render: ({ email }) => <Typography.Text>{email}</Typography.Text>,
      },
      {
        title: t("admin.adminsTable.columnName.actions"),
        render: ({ id }) => <DeleteAdmin id={id} />,
      },
    ],
    [t],
  );
};
