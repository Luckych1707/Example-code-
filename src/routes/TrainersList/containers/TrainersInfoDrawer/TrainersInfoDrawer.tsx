import { CloseOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import {
  Button,
  Descriptions,
  DescriptionsProps,
  Drawer,
  Empty,
  Flex,
  Spin,
  Typography,
} from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { getCountriesWithCities } from "@/api/queries/getCountriesWithCities";
import { getTrainer } from "@/api/queries/getTrainer";
import { Image } from "@/components/Image";
import { Video } from "@/components/Video";
import { ReviewsModal } from "@/routes/TrainersList/containers/TrainersInfoDrawer/components/ReviewsModal";

import { InfoScheduleModal } from "../components/InfoScheduleModal";

type Props = {
  onClose: () => void;
  isOpen: boolean;
  id: string;
};

export const TrainersInfoDrawer = ({ onClose, isOpen, id }: Props) => {
  const { t } = useTranslation(["c_trainer", "glossary"]);

  const [isReviewsModalOpen, setIsReviewsModalOpen] = useState(false);
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);

  const { data, isLoading } = useQuery({
    ...getTrainer.getQueryOptions(id || ""),
  });

  const { data: countriesWithCities } = useQuery({
    ...getCountriesWithCities.getQueryOptions(),
    retry: false,
    staleTime: Infinity,
  });

  const trainer = data?.result;

  const countryOfTrainingName = countriesWithCities?.result?.items?.find(
    (item) => item.id === trainer?.city?.countryId,
  );

  if (isLoading) {
    return <Spin />;
  }

  if (!trainer) {
    return <Empty />;
  }

  const items: DescriptionsProps["items"] = [
    {
      key: "name",
      label: `${t("fields.name")}`,
      children: (
        <Typography.Text>{`${[trainer.lastName, trainer.firstName]
          .filter(Boolean)
          .join(" ")}`}</Typography.Text>
      ),
      span: 2,
    },
    {
      key: "gender",
      label: `${t("fields.gender")}`,
      children: (
        <Typography.Text>
          {t(`glossary:genderOptions.${trainer.gender}`)}
        </Typography.Text>
      ),
    },
    {
      key: "countryOfTraining",
      label: `${t("fields.countryOfTraining")}`,
      children: (
        <Typography.Text>{countryOfTrainingName?.name}</Typography.Text>
      ),
      span: 2,
    },
    {
      key: "city",
      label: `${t("fields.city")}`,
      children: <Typography.Text>{trainer.city?.name}</Typography.Text>,
    },
    {
      key: "countryOfBirthId",
      label: `${t("fields.countryOfBirth")}`,
      children: <Typography.Text>{trainer.country?.name}</Typography.Text>,
      span: 2,
    },
    {
      key: "languages",
      label: `${t("fields.languages")}`,
      children: (
        <Typography.Text>
          {trainer?.dictionary?.languages?.map((item) => item.name).join(", ")}
        </Typography.Text>
      ),
    },
    {
      key: "experience",
      label: `${t("fields.experience")}`,
      children: (
        <Typography.Text>
          {t("glossary:yearWithCount", { count: trainer.experience })}
        </Typography.Text>
      ),
      span: 2,
    },
    {
      key: "phone",
      label: `${t("fields.phone")}`,
      children: <Typography.Text>{trainer.phone}</Typography.Text>,
      span: 2,
    },
    {
      key: "email",
      label: `${t("fields.email")}`,
      children: <Typography.Text>{trainer.email}</Typography.Text>,
      span: 3,
    },
    {
      key: "about",
      label: `${t("fields.about")}`,
      children: <Typography.Text>{trainer.about}</Typography.Text>,
      span: 3,
    },

    {
      key: "subscription",
      label: `${t("fields.subscription")}`,
      children: <Typography.Text>{trainer.subscription?.name}</Typography.Text>,
      span: 2,
    },
    {
      key: "goals",
      label: `${t("fields.goals")}`,
      children: (
        <Typography.Text>
          {trainer.subscription?.goals?.map((item) => item.name).join(", ")}
        </Typography.Text>
      ),
    },
    {
      key: "certificates",
      label: `${t("fields.certificates")}`,
      children: (
        <Typography.Text>
          {trainer.certificates?.map((item) => item.name)}
        </Typography.Text>
      ),
      span: 3,
    },
    {
      key: "reviews",
      children: (
        <Button type="primary" onClick={() => setIsReviewsModalOpen(true)}>
          {t("fields.reviews")}
        </Button>
      ),
      span: 2,
    },
    {
      key: "schedule",
      children: (
        <Button type="primary" onClick={() => setIsScheduleModalOpen(true)}>
          {t("fields.schedule")}
        </Button>
      ),
      span: 2,
    },
    {
      key: "files",
      label: `${t("fields.files")}`,
      children: (
        <Flex vertical gap="8px">
          {trainer?.images?.map((item) => <Image id={item.id || ""} />)}

          {trainer?.videos?.map((item) => (
            <Video id={item.id || ""} controls width={450} volume={0.1} />
          ))}
        </Flex>
      ),
      span: 3,
    },
  ];

  return (
    <Drawer
      title={t("info.title")}
      width={520}
      open={isOpen}
      onClose={onClose}
      closeIcon={false}
      extra={<Button onClick={onClose} type="text" icon={<CloseOutlined />} />}
    >
      <Descriptions items={items} layout="vertical" />
      {isReviewsModalOpen && (
        <ReviewsModal
          trainerId={trainer.id}
          isOpen={isReviewsModalOpen}
          onClear={() => setIsReviewsModalOpen(false)}
        />
      )}
      {isScheduleModalOpen && (
        <InfoScheduleModal
          trainerId={trainer.id}
          isOpen={isScheduleModalOpen}
          onClear={() => setIsScheduleModalOpen(false)}
        />
      )}
    </Drawer>
  );
};
