import { Flex } from "antd";

import { RouteDirectoryList } from "@/widgets/RouteDirectory";

const RouteDirectory = () => {
  return (
    <Flex vertical style={{ maxWidth: "800px" }}>
      <RouteDirectoryList />
    </Flex>
  );
};

export default RouteDirectory;
