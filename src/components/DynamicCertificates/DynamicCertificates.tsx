import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Flex, Form, Input } from "antd";
import { useTranslation } from "react-i18next";

export const DynamicCertificates = () => {
  const { t } = useTranslation(["c_trainer", "glossary"]);

  return (
    <Form.List name="newCertificates">
      {(fields, { add, remove }) => {
        return (
          <div>
            {fields.map((field, index) => (
              <Form.Item
                name={[index, "name"]}
                label="Certificates name"
                key={field.key}
                rules={[
                  {
                    required: true,
                    message: t("fields.rules.required", {
                      text: t("fields.certificates"),
                    }),
                  },
                ]}
              >
                <Flex gap="8px">
                  <Input />
                  <Button
                    className="dynamic-delete-button"
                    onClick={() => remove(field.name)}
                    icon={<DeleteOutlined />}
                  />
                </Flex>
              </Form.Item>
            ))}

            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                style={{ width: "60%" }}
                icon={<PlusOutlined />}
              >
                {t("fields.createCertificates")}
              </Button>
            </Form.Item>
          </div>
        );
      }}
    </Form.List>
  );
};
