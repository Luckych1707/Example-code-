import { PlusOutlined } from "@ant-design/icons";
import { Link } from "@tanstack/react-router";
import { Button, Divider, Flex, List } from "antd";
import { useTranslation } from "react-i18next";

import { RouteDirectoryCard } from "@/entities/RouteDirectory";
import { RouteDirectoryFilters } from "@/features/RouteDirectory";
import { RouteDirectoryMocks } from "@/widgets/RouteDirectory/model/RouteDirectoryMocks";

export const RouteDirectoryList = () => {
  const { t } = useTranslation("p_routeDirectory");

  return (
    <Flex vertical>
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

      <List
        pagination={{ position: "bottom", align: "start", defaultPageSize: 5 }}
        dataSource={RouteDirectoryMocks}
        renderItem={(item) => (
          <List.Item>
            <RouteDirectoryCard route={item} />
          </List.Item>
        )}
      />
    </Flex>
  );
};
