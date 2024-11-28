import { Flex } from "antd";

import { CreateAdmin } from "@/routes/Admins/AdminList/containers/CreateAdmin";

import { AdminsTable } from "./containers/AdminsTable";

const AdminList = () => {
  return (
    <Flex style={{ width: "100%" }} vertical>
      <CreateAdmin />

      <AdminsTable />
    </Flex>
  );
};

export default AdminList;
