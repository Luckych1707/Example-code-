export type CityInfoType = {
  city: { id: string; title: string; text: string; img: string };
  setCityVariant: (variant: string | undefined) => void;
  cityVariant: string;
};

export type CityEditType = {
  city: { id: string; title: string; text: string; img: string };
  setCityVariant: (variant: string | undefined) => void;
};

export type CityEditValues = {
  name: string;
  image: string;
  description: string;
};
