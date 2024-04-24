export type CitiesCardProps = {
  cities: { title: string; text: string; img: string; id: string };
  setSelectedCity: (city: { id: string; variant: string }) => void;
};
