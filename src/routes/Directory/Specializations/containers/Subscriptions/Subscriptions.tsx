import { PlusOutlined } from "@ant-design/icons";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, Empty, Flex, List, message, Spin, Typography } from "antd";
import { isAxiosError } from "axios";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { deleteSubscription } from "@/api/mutation/deleteSubscription";
import { getGoals } from "@/api/queries/getGoals";
import { getSubscriptions } from "@/api/queries/getSubscriptions";
import { SubscriptionItem } from "@/routes/Directory/Specializations/containers/Subscriptions/components/SubscriptionItem";
import { SubscriptionsCreateDrawer } from "@/routes/Directory/Specializations/containers/SubscriptionsCreateDrawer";
import { SubscriptionsEditDrawer } from "@/routes/Directory/Specializations/containers/SubscriptionsEditDrawer";
import { SubscriptionsInfoDrawer } from "@/routes/Directory/Specializations/containers/SubscriptionsInfoDrawer";

export const Subscriptions = () => {
  const { t } = useTranslation(["p_directory_specializations", "glossary"]);

  const queryClient = useQueryClient();

  const [messageApi, contextHolder] = message.useMessage();

  const [isCreateDrawerOpen, setIsCreateDrawerOpen] = useState(false);
  const [editDrawerId, setEditDrawerId] = useState<string | undefined>(
    undefined,
  );
  const [infoDrawerId, setInfoDrawerId] = useState<string | undefined>(
    undefined,
  );

  const { data: goals = [], isLoading: isGoalsLoading } = useQuery({
    ...getGoals.getQueryOptions({ limit: 9999 }),
    retry: false,
    select: (goals) => goals?.result?.items,
  });

  const { data: subscriptions, isLoading: isSubscriptionsLoading } = useQuery({
    ...getSubscriptions.getQueryOptions({ limit: 99999 }),
    retry: false,
  });

  const deleteSubscriptionsMutation = useMutation({
    ...deleteSubscription.getMutationOptions(),
    onSuccess: async () => {
      await queryClient.refetchQueries({
        queryKey: [getSubscriptions.queryName],
      });
    },

    onError: (error) => {
      if (!isAxiosError(error))
        return messageApi.open({
          type: "error",
          content: t("glossary:baseError"),
        });

      const errorMessage = error.response?.data.msg;

      if (!errorMessage)
        return messageApi.open({
          type: "error",
          content: t("glossary:baseError"),
        });

      messageApi.open({
        type: "error",
        content: `${errorMessage}`,
      });
    },
  });

  const handleSelectSubscriptionEdit = (id: string) => {
    setEditDrawerId(id);
  };

  const handleSelectSubscriptionDelete = (id: string) => {
    deleteSubscriptionsMutation.mutate(id);
  };

  const handleSelectSubscriptionInfo = (id: string) => {
    setInfoDrawerId(id);
  };

  if (isGoalsLoading || isSubscriptionsLoading) {
    return <Spin />;
  }

  if (!subscriptions) {
    return <Empty />;
  }

  return (
    <Flex vertical>
      {contextHolder}
      <Flex align="center" gap="12px" style={{ marginBottom: "8px" }}>
        <Typography.Title style={{ margin: "0" }}>
          {t("subscriptionsTitle")}
        </Typography.Title>
        <Button
          icon={<PlusOutlined />}
          onClick={() => setIsCreateDrawerOpen(true)}
        />
      </Flex>

      <List
        rowKey={"id"}
        dataSource={subscriptions?.result?.items}
        renderItem={(subscription) => (
          <List.Item>
            <SubscriptionItem
              id={subscription.id}
              name={subscription.name}
              handleSelectSubscriptionDelete={handleSelectSubscriptionDelete}
              handleSelectSubscriptionEdit={handleSelectSubscriptionEdit}
              handleSelectSubscriptionInfo={handleSelectSubscriptionInfo}
            />
          </List.Item>
        )}
        bordered
      />

      <SubscriptionsCreateDrawer
        goals={goals}
        isOpen={isCreateDrawerOpen}
        onClose={() => setIsCreateDrawerOpen(false)}
      />

      <SubscriptionsEditDrawer
        goals={goals}
        id={editDrawerId || ""}
        isOpen={!!editDrawerId}
        onClose={() => setEditDrawerId(undefined)}
      />

      <SubscriptionsInfoDrawer
        id={infoDrawerId || ""}
        onClose={() => setInfoDrawerId(undefined)}
        isOpen={!!infoDrawerId}
      />
    </Flex>
  );
};
