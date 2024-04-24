import { PlusOutlined } from "@ant-design/icons";
import { Button, Divider, Flex } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { CityDrawer, CreateCityDrawer, List } from "@/widgets/Cities";

const Cities = () => {
  const { t } = useTranslation("p_city");

  const [selectedCity, setSelectedCity] = useState<
    | {
        id: string;
        variant: string;
      }
    | undefined
  >();

  const [isCreateCity, setIsCreateCity] = useState(false);

  return (
    <Flex vertical style={{ maxWidth: "800px" }}>
      <Flex>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => setIsCreateCity(true)}
        >
          {t("addCityButton")}
        </Button>
      </Flex>

      <Divider />

      <List setSelectedCity={(city) => setSelectedCity(city)} />

      {selectedCity && (
        <CityDrawer
          selectedCity={selectedCity}
          onClose={() => setSelectedCity(undefined)}
        />
      )}

      {isCreateCity && (
        <CreateCityDrawer
          onClose={() => setIsCreateCity(false)}
          isOpen={isCreateCity}
        />
      )}
    </Flex>
  );
};

export default Cities;
