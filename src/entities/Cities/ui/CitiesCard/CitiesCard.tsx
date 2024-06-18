import { DeleteFilled, EditFilled } from "@ant-design/icons";
import { Button, Flex, Image, Typography } from "antd";

import { CitiesCardProps } from "@/entities/Cities/model/types";

export const CitiesCard = ({ cities, setSelectedCity }: CitiesCardProps) => {
  return (
    <Flex
      vertical
      style={{ marginBottom: "8px", marginTop: "8px", width: "100%" }}
    >
      <Flex gap="32px" justify="space-between">
        <Flex gap="32px">
          <Flex>
            <Image
              width={160}
              height={102}
              src={cities.image.uri}
              style={{ borderRadius: "8px", cursor: "pointer" }}
              preview={false}
              onClick={() =>
                setSelectedCity({ id: cities.id, variant: "info" })
              }
            />
          </Flex>

          <Flex vertical>
            <Typography.Text
              style={{ cursor: "pointer" }}
              strong
              onClick={() =>
                setSelectedCity({ id: cities.id, variant: "info" })
              }
            >
              {cities.name}
            </Typography.Text>

            <Typography.Paragraph
              type="secondary"
              ellipsis={{
                rows: 3,
              }}
            >
              {cities.description}
            </Typography.Paragraph>
          </Flex>
        </Flex>
        <Flex gap="16px" align="center">
          <Button
            icon={<EditFilled />}
            type="primary"
            ghost
            onClick={() => setSelectedCity({ id: cities.id, variant: "edit" })}
          />
          <Button
            icon={<DeleteFilled />}
            type="primary"
            ghost
            danger
            onClick={() =>
              setSelectedCity({ id: cities.id, variant: "delete" })
            }
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
