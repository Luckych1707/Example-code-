import { Flex } from "antd";

import { SignInForm } from "@/features/SignIn";

const SignIn = () => {
  return (
    <Flex
      justify="center"
      align="center"
      style={{
        height: "100vh",
      }}
    >
      <SignInForm />
    </Flex>
  );
};

export default SignIn;
