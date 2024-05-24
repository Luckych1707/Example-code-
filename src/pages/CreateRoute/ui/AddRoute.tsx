import { Flex } from "antd";

import CreateRoute from "@/features/AddRoute/ui/CreateRoute";

const AddRoute = () => {
  return (
    <Flex vertical style={{ width: "800px" }}>
      <CreateRoute />
    </Flex>
  );
};

export default AddRoute;
