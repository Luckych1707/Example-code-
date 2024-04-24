export type CityDrawerProps = {
  onClose: () => void;
  selectedCity: { id: string; variant: string };
};

export type CreateCityDrawerProps = {
  onClose: () => void;
  isOpen: boolean;
};

export type ListProps = {
  setSelectedCity: (city: { id: string; variant: string }) => void;
};
