import { PlusOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Button, Empty, Flex, List, Spin, Typography } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { getGoals } from "@/api/queries/getGoals";

import { CreateGoal } from "./containers/CreateGoal";
import { GoalItem } from "./containers/GoalItem";

export const Goals = () => {
  const { t } = useTranslation(["p_directory_specializations", "glossary"]);

  const [isCreateGoals, setIsCreateGoals] = useState(false);

  const { data: goals = [], isLoading } = useQuery({
    ...getGoals.getQueryOptions({ limit: 9999 }),
    retry: false,
    select: (goals) => goals?.result?.items,
  });

  if (isLoading) {
    return <Spin />;
  }

  if (!goals) {
    return <Empty />;
  }

  return (
    <Flex vertical>
      <Flex align="center" gap="12px" style={{ marginBottom: "8px" }}>
        <Typography.Title style={{ margin: "0" }}>
          {t("goalsTitle")}
        </Typography.Title>
        <Button
          icon={<PlusOutlined />}
          onClick={() => setIsCreateGoals(true)}
        />
      </Flex>

      {isCreateGoals && <CreateGoal onCancel={() => setIsCreateGoals(false)} />}

      <List
        bordered
        rowKey={"id"}
        dataSource={goals}
        renderItem={(item) => (
          <List.Item>
            <GoalItem id={item.id || ""} name={item.name || ""} />
          </List.Item>
        )}
      />
    </Flex>
  );
};
