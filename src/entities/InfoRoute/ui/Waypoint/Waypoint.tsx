import { DownOutlined, FileFilled, UpOutlined } from "@ant-design/icons";
import { Link } from "@tanstack/react-router";
import { Button, Divider, Flex, Image, Typography } from "antd";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { WaypointProps } from "@/entities/InfoRoute/model/types";

export const Waypoint = ({
  item,
  setIsAllClosed,
  isAllClosed,
  index,
}: WaypointProps) => {
  const { t } = useTranslation(["p_createRoute", "glossary"]);

  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setIsOpen(!isAllClosed);
  }, [setIsOpen, isAllClosed]);

  return (
    <Flex
      vertical
      gap="16px"
      key={item?.name}
      style={{
        padding: "24px",
        boxShadow: "0px 6px 16px 0px #00000014",
        borderRadius: "8px",
      }}
    >
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
            name: item.name,
          })}
        </Typography.Title>
      </Flex>

      {isOpen && (
        <Flex vertical gap="16px">
          <Flex vertical>
            <Typography.Text type="secondary" style={{ margin: 0 }}>
              {t("field.waypoint.field.nameLabel")}
            </Typography.Text>

            <Typography.Text>{item?.name}</Typography.Text>
          </Flex>

          <Flex gap="32px">
            <Flex vertical>
              <Typography.Text type="secondary" style={{ margin: 0 }}>
                {t("field.waypoint.field.photoLabel")}
              </Typography.Text>

              <Flex gap="16px">
                {item?.attachments.map((item) => (
                  <Image
                    width={150}
                    height={150}
                    src={item.uri}
                    style={{ borderRadius: "8px" }}
                  />
                ))}
              </Flex>
            </Flex>

            <Flex vertical>
              <Typography.Text type="secondary" style={{ margin: 0 }}>
                {t("field.waypoint.field.audioLabel")}
              </Typography.Text>

              <Flex gap="8px">
                <FileFilled />
                <Link to={item.audio.uri}>
                  <Typography.Text style={{ color: "#1677FF" }}>
                    {item?.audio.name}
                  </Typography.Text>
                </Link>
              </Flex>
            </Flex>
          </Flex>

          <Flex vertical>
            <Typography.Text type="secondary" style={{ margin: 0 }}>
              {t("field.waypoint.field.descriptionLabel")}
            </Typography.Text>

            <Typography.Text>{item?.description}</Typography.Text>
          </Flex>

          <Flex gap="30%">
            <Flex vertical>
              <Typography.Text type="secondary" style={{ margin: 0 }}>
                {t("field.waypoint.field.latitudeLabel")}
              </Typography.Text>

              <Typography.Text>{item?.latitude}</Typography.Text>
            </Flex>

            <Flex vertical>
              <Typography.Text type="secondary" style={{ margin: 0 }}>
                {t("field.waypoint.field.longitudeLabel")}
              </Typography.Text>

              <Typography.Text>{item?.longitude}</Typography.Text>
            </Flex>
          </Flex>

          <Divider style={{ margin: 0 }} />

          <Flex vertical gap="12px">
            <Typography.Title level={5}>
              {t("field.waypoint.material.title")}
            </Typography.Title>

            {item.materials.map((item) => (
              <Flex vertical gap="12px">
                <Flex gap="12px">
                  <Typography.Text>{item.name}</Typography.Text>

                  <Typography.Text>{item.year}</Typography.Text>
                </Flex>

                <Typography.Text type="secondary">
                  {item.description}
                </Typography.Text>
              </Flex>
            ))}
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};
