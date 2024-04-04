import { List as AntList } from "antd";

import { FeedbackCard } from "@/entities/Feedback";
import { feedbackMock } from "@/pages/Feedback/model/mock";
import { ListProps } from "@/widgets/Feedback/model/types";

export const List = ({ setFeedbackItemId }: ListProps) => {
  return (
    <AntList
      pagination={{ position: "bottom", align: "start", defaultPageSize: 5 }}
      dataSource={feedbackMock}
      renderItem={(item) => (
        <AntList.Item>
          <FeedbackCard setFeedbackItemId={setFeedbackItemId} reviews={item} />
        </AntList.Item>
      )}
    />
  );
};
