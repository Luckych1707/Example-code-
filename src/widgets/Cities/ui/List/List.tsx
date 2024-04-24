import { List as AntList } from "antd";

import { CitiesCard } from "@/entities/Cities";
import { citiesMock } from "@/pages/Cities/model/citiesMock";
import { ListProps } from "@/widgets/Cities/model/types";

export const List = ({ setSelectedCity }: ListProps) => {
  return (
    <AntList
      pagination={{ position: "bottom", align: "start", defaultPageSize: 5 }}
      dataSource={citiesMock}
      renderItem={(item) => (
        <AntList.Item>
          <CitiesCard cities={item} setSelectedCity={setSelectedCity} />
        </AntList.Item>
      )}
    />
  );
};
