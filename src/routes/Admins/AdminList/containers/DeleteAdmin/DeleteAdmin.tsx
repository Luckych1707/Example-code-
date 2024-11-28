import { DeleteOutlined } from "@ant-design/icons";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Popconfirm } from "antd";
import { useTranslation } from "react-i18next";

import { deleteAdmin } from "@/api/mutation/deleteAdmin";
import { getAdmins } from "@/api/queries/getAdmins";

type Props = {
  id: string;
};

export const DeleteAdmin = ({ id }: Props) => {
  const { t } = useTranslation(["p_usersList", "glossary"]);

  const queryClient = useQueryClient();

  const deleteAdminMutation = useMutation({
    ...deleteAdmin.getMutationOptions(),
    onSuccess: async () => {
      await queryClient.refetchQueries({
        queryKey: [getAdmins.queryName],
      });
    },
  });

  const onDelete = () => {
    deleteAdminMutation.mutate(id);
  };

  return (
    <Popconfirm
      title={t("deleteAdminPopconfirm.title")}
      description={t("deleteAdminPopconfirm.text")}
      onConfirm={onDelete}
      okText={t("glossary:actions.submit")}
      cancelText={t("glossary:actions.cancel")}
    >
      <Button icon={<DeleteOutlined />} />
    </Popconfirm>
  );
};
