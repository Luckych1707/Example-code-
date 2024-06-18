import { PlusOutlined } from "@ant-design/icons";
import { Link } from "@tanstack/react-router";
import { Button, Divider, Flex } from "antd";
import { useTranslation } from "react-i18next";

import { RouteDirectoryFilters } from "@/features/RouteDirectory";
import { RouteDirectoryList } from "@/widgets/RouteDirectory";

const RouteDirectory = () => {
  const { t } = useTranslation("p_routeDirectory");

  return (
    <Flex vertical style={{ maxWidth: "800px" }}>
      <Flex>
        <Link to={"/create-route"}>
          <Button icon={<PlusOutlined />} type="primary">
            {t("addRouteButton")}
          </Button>
        </Link>
      </Flex>

      <Divider />

      <RouteDirectoryFilters />

      <Divider />

      <RouteDirectoryList />
    </Flex>
  );
};

export default RouteDirectory;
