import { CloseOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Button, Drawer } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { CityEdit } from "@/features/Cities";
import { CityInfo } from "@/features/Cities/ui/CityInfo/CityInfo";
import { getCity } from "@/widgets/Cities/api/queries/getCity";
import { CityDrawerProps } from "@/widgets/Cities/model/types";

export const CityDrawer = ({ selectedCity, onClose }: CityDrawerProps) => {
  const { t } = useTranslation("p_city");

  const [cityVariant, setCityVariant] = useState<string | undefined>(
    selectedCity.variant,
  );

  const { data } = useQuery({
    ...getCity.getQueryOptions(selectedCity.id || ""),
  });

  if (!data) return;

  return (
    <Drawer
      title={
        cityVariant === "edit"
          ? t("cityDrawer.editDrawerTitle")
          : t("cityDrawer.drawerTitle")
      }
      width={480}
      open={!!selectedCity.id}
      onClose={onClose}
      extra={<Button icon={<CloseOutlined />} type="text" onClick={onClose} />}
      closeIcon={false}
    >
      {(cityVariant === "info" || cityVariant === "delete") && (
        <CityInfo
          city={data}
          setCityVariant={setCityVariant}
          cityVariant={cityVariant}
          onClose={onClose}
        />
      )}
      {cityVariant === "edit" && <CityEdit city={data} onClose={onClose} />}
    </Drawer>
  );
};
