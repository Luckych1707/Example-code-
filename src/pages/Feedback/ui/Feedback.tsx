import { Flex } from "antd";
import { useState } from "react";

import { CardDrawer, Filters, List } from "@/widgets/Feedback";

const Feedback = () => {
  const [feedbackItemId, setFeedbackItemId] = useState<string>();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Flex vertical style={{ maxWidth: "800px" }}>
      <Filters />

      <List
        setFeedbackItemId={setFeedbackItemId}
        setIsOpen={() => setIsDrawerOpen(true)}
      />

      {feedbackItemId && (
        <CardDrawer
          id={feedbackItemId}
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
        />
      )}
    </Flex>
  );
};

export default Feedback;
