import {
  CloseOutlined,
  CompassTwoTone,
  DeleteFilled,
  EditFilled,
} from "@ant-design/icons";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Link, useNavigate } from "@tanstack/react-router";
import { Button, Flex, Image, Tag, Typography } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { deleteRoute } from "@/entities/EditRoute/api/deleteRoute";
import { getRoutesList } from "@/shared/api/handBooks/queries/getRoutes";
import { RouteResponse } from "@/shared/api/schemas";
import { getCity } from "@/widgets/Cities/api/queries/getCity";

export const RouteDirectoryCard = ({ route }: { route: RouteResponse }) => {
  const { t } = useTranslation("p_routeDirectory");

  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const [isDeleted, seiIsDeleted] = useState<string>();

  const { data } = useQuery({
    ...getCity.getQueryOptions(route.cityId || ""),
  });

  const deleteRouteMutation = useMutation({
    ...deleteRoute.getMutationOptions(),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [getRoutesList.queryName],
      });
    },
  });

  const handeDeleteRoute = () => {
    deleteRouteMutation.mutate(route?.id || "");
  };

  return (
    <Flex vertical style={{ width: "100%" }}>
      <Flex justify="space-between">
        <Flex gap="32px">
          <Link to="/info-route/$id" params={{ id: route?.id }}>
            <Image
              width={360}
              height={160}
              style={{ borderRadius: "8px" }}
              src={route.attachment.uri}
              preview={false}
            />
          </Link>

          <Flex vertical gap="8px">
            <Link to="/info-route/$id" params={{ id: route?.id }}>
              <Typography.Title level={4} style={{ margin: 0 }}>
                {route.name}
              </Typography.Title>
            </Link>

            <Flex gap="8px" align="center">
              <CompassTwoTone twoToneColor="#1677FF" />

              <Flex>{data?.name}</Flex>

              {route.status === "draft" && <Tag>{t("draft")}</Tag>}
            </Flex>

            <Typography.Paragraph
              type="secondary"
              style={{ margin: 0 }}
              ellipsis={{
                rows: 3,
              }}
            >
              {route.description}
            </Typography.Paragraph>

            <Typography.Title level={3} style={{ margin: 0 }}>
              {`${route.price} ₽`}
            </Typography.Title>
          </Flex>
        </Flex>

        <Flex align="center">
          {!!isDeleted ? (
            <Flex gap="16px">
              <Button
                icon={<DeleteFilled />}
                type="primary"
                ghost
                danger
                onClick={handeDeleteRoute}
              />

              <Button
                icon={<CloseOutlined />}
                onClick={() => seiIsDeleted(undefined)}
              />
            </Flex>
          ) : (
            <Flex gap="16px">
              <Button
                icon={<EditFilled />}
                type="primary"
                ghost
                onClick={() =>
                  navigate({ to: "/edit-route/$id", params: { id: route.id } })
                }
              />

              <Button
                icon={<DeleteFilled />}
                type="primary"
                ghost
                danger
                onClick={() => seiIsDeleted(route.id)}
              />
            </Flex>
          )}
        </Flex>
      </Flex>

      {!!isDeleted && (
        <Flex justify="flex-end">
          <Typography.Text type="danger">
            {t("confirmDeleteText")}
          </Typography.Text>
        </Flex>
      )}
    </Flex>
  );
};
