import { Flex } from "antd";

import { Goals } from "@/routes/Directory/Specializations/containers/Goals";
import { Subscriptions } from "@/routes/Directory/Specializations/containers/Subscriptions";

const Specializations = () => {
  return (
    <Flex gap="125px" style={{ padding: "20px 30px" }}>
      <Subscriptions />

      <Goals />
    </Flex>
  );
};

export default Specializations;
