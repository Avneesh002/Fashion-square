import { Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import BaseContent from "../Components/BasepageComps/BaseContent";

const Basepage = () => {
  return (
    <Stack
      height={"100vh"}
      width={"100%"}
      background="#fff url(./bgLimeroad.jpg) center center/cover no-repeat"
    >
      <BaseContent />
    </Stack>
  );
};

export default Basepage;
