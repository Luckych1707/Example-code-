import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  DeleteFilled,
  DownOutlined,
  UpOutlined,
  WarningTwoTone,
} from "@ant-design/icons";
import { Button, Divider, Flex, Popconfirm, Typography } from "antd";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { Material } from "@/entities/RouteDirectory";
import { WaypointProps } from "@/entities/RouteDirectory/model/types";
import { Input } from "@/shared/ui/Input";
import { Upload } from "@/shared/ui/Upload/Upload";

export const Waypoint = ({
  waypoint,
  index,
  control,
  remove,
  watch,
  move,
  length,
  setIsAllClosed,
  isAllClosed,
}: WaypointProps) => {
  const { t } = useTranslation(["p_createRoute", "glossary"]);

  const [isOpen, setIsOpen] = useState(true);

  const waypointName = watch(`waypoint.${index}.name`);

  useEffect(() => {
    setIsOpen(!isAllClosed);
  }, [setIsOpen, isAllClosed]);

  return (
    <Flex
      vertical
      gap="16px"
      key={waypoint?.id}
      style={{
        padding: "24px",
        boxShadow: "0px 6px 16px 0px #00000014",
        borderRadius: "8px",
      }}
    >
      <Flex justify="space-between">
        <Flex align="center" gap="12px">
          <Button
            icon={isOpen ? <UpOutlined /> : <DownOutlined />}
            type="text"
            onClick={() => {
              setIsOpen(!isOpen);
              setIsAllClosed();
            }}
          />
          <Typography.Title level={5}>
            {t("field.waypoint.title", {
              index: index + 1,
              name: waypointName,
            })}
          </Typography.Title>
        </Flex>

        <Flex>
          <Divider type="vertical" style={{ height: "100%" }} />

          <Button
            icon={<ArrowUpOutlined />}
            type="text"
            disabled={index === 0}
            onClick={() => move(index, index - 1)}
          />
          <Button
            icon={<ArrowDownOutlined />}
            type="text"
            disabled={index === length - 1}
            onClick={() => move(index, index + 1)}
          />

          <Divider type="vertical" style={{ height: "100%" }} />

          <Popconfirm
            title={t("field.waypoint.field.deleteWaypointPopconfirm.title")}
            description={t(
              "field.waypoint.field.deleteWaypointPopconfirm.description",
            )}
            okText={t("field.waypoint.field.deleteWaypointPopconfirm.okText")}
            cancelText={t(
              "field.waypoint.field.deleteWaypointPopconfirm.cancelText",
            )}
            okButtonProps={{ danger: true }}
            icon={<WarningTwoTone twoToneColor="#F5222D" />}
            onConfirm={() => remove(index)}
          >
            <Button icon={<DeleteFilled />} danger type="text" />
          </Popconfirm>
        </Flex>
      </Flex>

      {isOpen && (
        <Flex vertical gap="12px">
          <Input.Controller
            name={`waypoint.${index}.name`}
            control={control}
            label={t("field.waypoint.field.nameLabel")}
            placeholder={t("field.waypoint.field.namePlaceholder")}
          />

          <Flex gap="286px">
            <Upload label={t("field.waypoint.field.photoLabel")} />

            <Upload label={t("field.waypoint.field.audioLabel")} />
          </Flex>

          <Input.TextArea.Controller
            name={`waypoint.${index}.description`}
            control={control}
            label={t("field.waypoint.field.descriptionLabel")}
            placeholder={t("field.waypoint.field.descriptionPlaceholder")}
          />

          <Flex gap="32px">
            <Input.Controller
              name={`waypoint.${index}.latitude`}
              control={control}
              label={t("field.waypoint.field.latitudeLabel")}
              placeholder={t("field.waypoint.field.latitudePlaceholder")}
            />
            <Input.Controller
              name={`waypoint.${index}.longitude`}
              control={control}
              label={t("field.waypoint.field.longitudeLabel")}
              placeholder={t("field.waypoint.field.longitudePlaceholder")}
            />
          </Flex>

          <Divider style={{ margin: 0 }} />

          <Material waypointIndex={index} />
        </Flex>
      )}
    </Flex>
  );
};
