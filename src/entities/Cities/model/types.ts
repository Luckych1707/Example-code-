import { CityResponse } from "@/shared/api/schemas";

export type CitiesCardProps = {
  cities: CityResponse;
  setSelectedCity: (city: { id: string; variant: string }) => void;
};
