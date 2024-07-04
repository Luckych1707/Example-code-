import { BookOutlined, DeleteFilled, WarningTwoTone } from "@ant-design/icons";
import { Button, Flex, Popconfirm, Typography } from "antd";
import { useFieldArray, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { MaterialProps } from "@/entities/RouteDirectory/model/types";
import { CreateRouteFormValues } from "@/features/AddRoute/model/types";
import { Input } from "@/shared/ui/Input";

export const Material = ({ waypointIndex }: MaterialProps) => {
  const { t } = useTranslation(["p_createRoute", "glossary"]);

  const { control, formState } = useFormContext<CreateRouteFormValues>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: `waypoint.${waypointIndex}.material`,
  });

  return (
    <Flex vertical>
      <Typography.Title level={5}>
        {t("field.waypoint.material.title")}
      </Typography.Title>

      <Flex vertical>
        {fields.map((item, index) => (
          <Flex
            key={item.id + waypointIndex}
            vertical
            gap="12px"
            style={{
              border: "1px solid #D9D9D9",
              borderRadius: "8px",
              padding: "24px",
              marginBottom: "24px",
            }}
          >
            <Flex justify="space-between">
              <Typography.Title level={5}>
                {t("glossary:morphemes.lattice", { key: index + 1 })}
              </Typography.Title>

              <Popconfirm
                title={t(
                  "field.waypoint.material.field.deleteMaterialPopconfirm.title",
                )}
                description={t(
                  "field.waypoint.material.field.deleteMaterialPopconfirm.description",
                )}
                okText={t(
                  "field.waypoint.material.field.deleteMaterialPopconfirm.okText",
                )}
                cancelText={t(
                  "field.waypoint.material.field.deleteMaterialPopconfirm.cancelText",
                )}
                okButtonProps={{ danger: true }}
                icon={<WarningTwoTone twoToneColor="#F5222D" />}
                onConfirm={() => remove(index)}
              >
                <Button icon={<DeleteFilled />} danger type="text" />
              </Popconfirm>
            </Flex>

            <Flex gap="32px">
              <Input.Controller
                name={`waypoint.${waypointIndex}.material.${index}.name`}
                control={control}
                label={t("field.waypoint.material.field.nameLabel")}
                placeholder={t("field.waypoint.material.field.namePlaceholder")}
                rules={{ required: true }}
                isError={
                  formState.errors.waypoint?.[waypointIndex]?.material?.[index]
                    ?.name?.type
                }
              />

              <Input.Controller
                name={`waypoint.${waypointIndex}.material.${index}.year`}
                control={control}
                label={t("field.waypoint.material.field.yearOfIssueLabel")}
                placeholder={t(
                  "field.waypoint.material.field.yearOfIssuePlaceholder",
                )}
                rules={{ required: true }}
                isError={
                  formState.errors.waypoint?.[waypointIndex]?.material?.[index]
                    ?.year?.type
                }
              />
            </Flex>

            <Input.TextArea.Controller
              name={`waypoint.${waypointIndex}.material.${index}.description`}
              control={control}
              label={t("field.waypoint.material.field.shortDescriptionLabel")}
              placeholder={t(
                "field.waypoint.material.field.shortDescriptionPlaceholder",
              )}
              rules={{ required: true }}
              isError={
                formState.errors.waypoint?.[waypointIndex]?.material?.[index]
                  ?.description?.type
              }
            />
          </Flex>
        ))}
      </Flex>

      <Flex>
        <Button
          icon={<BookOutlined />}
          type="primary"
          onClick={() =>
            append({
              name: "",
              year: "",
              description: "",
            })
          }
        >
          {t("field.waypoint.addMaterialButton")}
        </Button>
      </Flex>
    </Flex>
  );
};
