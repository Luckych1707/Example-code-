import { Flex } from "antd";

import { Languages } from "@/routes/Directory/Countries/containers/Languages";

import { Cities } from "./containers/Cities";

const Countries = () => {
  return (
    <Flex gap="125px" style={{ padding: "20px 30px" }}>
      <Cities />

      <Languages />
    </Flex>
  );
};

export default Countries;
