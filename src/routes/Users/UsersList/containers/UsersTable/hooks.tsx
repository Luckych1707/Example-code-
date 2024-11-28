import { Link } from "@tanstack/react-router";
import { Tooltip, Typography } from "antd";
import { ColumnsType } from "antd/es/table";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import { UserSchema } from "@/api/schemas";

export const useUsersColumns = () => {
  const { t } = useTranslation("p_usersList");

  return useMemo<ColumnsType<UserSchema>>(
    () => [
      {
        title: t("usersTable.columnName.name"),
        width: "25%",
        render: ({ firstName, lastName, id }) => {
          const fullName = [lastName, firstName].filter(Boolean).join(" ");
          return (
            <Link
              to={"/user/$id"}
              params={{ id: id }}
              style={{ cursor: "pointer" }}
            >
              {fullName.length > 40 ? (
                <Tooltip title={fullName}>
                  {fullName.slice(0, 40).concat("...")}
                </Tooltip>
              ) : (
                fullName
              )}
            </Link>
          );
        },
      },
      {
        title: t("usersTable.columnName.mail"),
        width: "25%",
        render: ({ email }) => <Typography.Text>{email}</Typography.Text>,
      },
      {
        title: t("usersTable.columnName.phone"),
        width: "10%",
        render: ({ phone }) => <Typography.Text>{phone}</Typography.Text>,
      },
      {
        title: t("usersTable.columnName.goal"),
        width: "15%",
        render: ({ goal }) => <Typography.Text>{goal?.name}</Typography.Text>,
      },
    ],
    [t],
  );
};
