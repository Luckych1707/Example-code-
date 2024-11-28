import { useQuery } from "@tanstack/react-query";

import { getCertificates } from "@/api/queries/getCertificates";
import { getCountries } from "@/api/queries/getCountries";
import { getCountriesWithCities } from "@/api/queries/getCountriesWithCities";
import { getLanguages } from "@/api/queries/getLanguages";
import { getSubscriptions } from "@/api/queries/getSubscriptions";

export const useCreateTrainersOptions = () => {
  const { data: countriesWithCities } = useQuery({
    ...getCountriesWithCities.getQueryOptions(),
    retry: false,
    staleTime: Infinity,
  });

  const { data: countriesOptions } = useQuery({
    ...getCountries.getQueryOptions({ limit: 99999 }),
    retry: false,
    staleTime: Infinity,
    select: (data) => {
      return data?.result?.items?.map((item) => ({
        label: item.name || "",
        value: item.id || "",
      }));
    },
  });

  const { data: languagesOptions } = useQuery({
    ...getLanguages.getQueryOptions({ limit: 99999 }),
    retry: false,
    staleTime: Infinity,
    select: (data) => {
      return data?.result?.items?.map((item) => ({
        label: item.name || "",
        value: item.id || "",
      }));
    },
  });

  const { data: subscriptionsOptions } = useQuery({
    ...getSubscriptions.getQueryOptions(),
    retry: false,
    staleTime: Infinity,
    select: (data) => {
      return data?.result?.items?.map((item) => ({
        label: item.name || "",
        value: item.id || "",
      }));
    },
  });

  const { data: certificatesOptions } = useQuery({
    ...getCertificates.getQueryOptions({ limit: 99999 }),
    retry: false,
    staleTime: Infinity,
    select: (data) => {
      return data?.result?.items?.map((item) => ({
        label: item.name || "",
        value: item.id || "",
      }));
    },
  });

  return {
    countriesWithCitiesOptions: countriesWithCities?.result?.items?.map(
      (item) => ({
        label: item.name || "",
        value: item.id || "",
      }),
    ),
    certificatesOptions,
    subscriptionsOptions,
    languagesOptions,
    countriesOptions,
    countriesWithCities: countriesWithCities?.result?.items,
  };
};
