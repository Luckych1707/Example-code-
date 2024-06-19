import { Tag } from "antd";
import { useTranslation } from "react-i18next";

import { StatusProps } from "@/shared/ui/FeedbackStatus/types";

export const FeedbackStatus = ({ status }: StatusProps) => {
  const { t } = useTranslation("glossary");

  switch (status) {
    case "new":
      return <Tag color="blue">{t("status.new")}</Tag>;

    case "processed":
      return <Tag color="green">{t("status.processed")}</Tag>;

    case "viewed":
      return <Tag color="orange">{t("status.viewed")}</Tag>;

    default:
      return <Tag color="orange">{t("status.viewed")}</Tag>;
  }
};
