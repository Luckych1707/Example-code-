import { Flex } from "antd";
import { useState } from "react";

import { CardDrawer, Filters, List } from "@/widgets/Feedback";

const Feedback = () => {
  const [feedbackItemId, setFeedbackItemId] = useState<string>();

  return (
    <Flex vertical style={{ maxWidth: "800px" }}>
      <Filters />

      <List setFeedbackItemId={setFeedbackItemId} />

      {feedbackItemId && (
        <CardDrawer
          id={feedbackItemId}
          onClose={() => setFeedbackItemId(undefined)}
        />
      )}
    </Flex>
  );
};

export default Feedback;
