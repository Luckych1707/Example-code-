import { PlusOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Button, Empty, Flex, List, Spin, Typography } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { getLanguages } from "@/api/queries/getLanguages";
import { CreateLanguage } from "@/routes/Directory/Countries/containers/Languages/components/CreateLanguage";
import { LanguageItem } from "@/routes/Directory/Countries/containers/Languages/components/LanguageItem";

export const Languages = () => {
  const { t } = useTranslation(["p_directory_countries", "glossary"]);

  const [isCreateLanguage, setIsCreateLanguage] = useState(false);

  const { data: languages, isLoading } = useQuery({
    ...getLanguages.getQueryOptions({ limit: 99999 }),
    retry: false,
    select: (languages) => languages?.result?.items,
  });

  if (isLoading) {
    return <Spin />;
  }

  if (!languages) {
    return <Empty />;
  }

  return (
    <Flex vertical>
      <Flex align="center" gap="12px" style={{ marginBottom: "8px" }}>
        <Typography.Title style={{ margin: "0" }}>
          {t("languagesTitle")}
        </Typography.Title>
        <Button
          icon={<PlusOutlined />}
          onClick={() => setIsCreateLanguage(true)}
        />
      </Flex>

      {isCreateLanguage && (
        <CreateLanguage onCancel={() => setIsCreateLanguage(false)} />
      )}

      <List
        bordered
        dataSource={languages}
        rowKey={"id"}
        renderItem={(item) => (
          <List.Item>
            <LanguageItem id={item.id || ""} name={item.name || ""} />
          </List.Item>
        )}
      />
    </Flex>
  );
};
