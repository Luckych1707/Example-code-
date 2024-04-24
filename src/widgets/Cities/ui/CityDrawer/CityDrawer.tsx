import { CloseOutlined } from "@ant-design/icons";
import { Button, Drawer } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { CityEdit } from "@/features/Cities";
import { CityInfo } from "@/features/Cities/ui/CityInfo/CityInfo";
import { citiesMock } from "@/pages/Cities/model/citiesMock";
import { CityDrawerProps } from "@/widgets/Cities/model/types";

export const CityDrawer = ({ selectedCity, onClose }: CityDrawerProps) => {
  const { t } = useTranslation("p_city");

  const [cityVariant, setCityVariant] = useState<string | undefined>(
    selectedCity.variant,
  );

  const city = citiesMock.filter((item) => item.id === selectedCity.id)[0];

  return (
    <Drawer
      title={
        cityVariant === "edit"
          ? t("cityDrawer.editDrawerTitle")
          : t("cityDrawer.drawerTitle")
      }
      width={480}
      open={!!selectedCity.id}
      extra={<Button icon={<CloseOutlined />} type="text" onClick={onClose} />}
      closeIcon={false}
      maskClosable={false}
    >
      {(cityVariant === "info" || cityVariant === "delete") && (
        <CityInfo
          city={city}
          setCityVariant={setCityVariant}
          cityVariant={cityVariant}
        />
      )}
      {cityVariant === "edit" && (
        <CityEdit city={city} setCityVariant={setCityVariant} />
      )}
    </Drawer>
  );
};
