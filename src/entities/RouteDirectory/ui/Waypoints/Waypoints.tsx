import { PlusOutlined } from "@ant-design/icons";
import { Button, Flex, Typography } from "antd";
import { useState } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { Waypoint } from "@/entities/RouteDirectory";
import { CreateRouteFormValues } from "@/features/AddRoute/model/types";

type Props = {
  setDeletedWaypoints?: (value: string) => void;
};

export const Waypoints = ({ setDeletedWaypoints }: Props) => {
  const { t } = useTranslation("p_createRoute");

  const [isAllClosed, setIsAllClosed] = useState(false);

  const { control, watch, setValue, formState } =
    useFormContext<CreateRouteFormValues>();

  const waypoint = watch(`waypoint`);
  const { fields, append, remove, move } = useFieldArray({
    control,
    name: "waypoint",
  });

  const handleAddWaypoint = () => {
    setIsAllClosed(false);
    append({
      waypointId: "",
      order: fields.length,
      name: "",
      description: "",
      longitude: "",
      latitude: "",
      material: [],
    });
  };

  return (
    <Flex vertical gap="24px">
      <Flex justify="space-between">
        <Typography.Title level={3}>
          {t("field.waypoint.waypointTitle")}
        </Typography.Title>

        <Button type="primary" onClick={() => setIsAllClosed(!isAllClosed)}>
          {isAllClosed ? (
            <span>{t("field.waypoint.actions.expand")}</span>
          ) : (
            <span>{t("field.waypoint.actions.collapse")}</span>
          )}
        </Button>
      </Flex>

      {fields.map((item, index) => (
        <Waypoint
          waypoint={item}
          control={control}
          formState={formState}
          index={index}
          remove={(index) => {
            remove(index);
            setDeletedWaypoints &&
              setDeletedWaypoints(
                waypoint.find((it) => it.waypointId === item.waypointId)
                  ?.waypointId || "",
              );
          }}
          watch={watch}
          setValue={setValue}
          move={move}
          length={fields.length}
          isAllClosed={isAllClosed}
        />
      ))}

      <Flex>
        <Button
          icon={<PlusOutlined />}
          type="primary"
          onClick={handleAddWaypoint}
        >
          {t("addWaypointButton")}
        </Button>
      </Flex>
    </Flex>
  );
};
