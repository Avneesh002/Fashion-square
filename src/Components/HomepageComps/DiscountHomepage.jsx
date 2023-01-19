import React from "react";
import { Stack, Alert, useBreakpointValue, Text } from "@chakra-ui/react";
import { HiSpeakerphone } from "react-icons/hi";

const DiscountHomepage = () => {
  return (
    <Stack
      paddingTop={"30px"}
      w={useBreakpointValue({ base: "99%", lg: "60%" })}
      mt={"1rem"}
    >
      <Alert status="info" variant="top-accent">
        <Stack bg={"#3182CE"} mr={"10px"} borderRadius={"50%"} p={"12px"}>
          <HiSpeakerphone fontSize={"20px"} color="white" />
        </Stack>
        <Text>
          {" "}
          Get FLAT 10% OFF on your purchase on payment via Paytm/ GPay/ PhonePe/
          Net Banking/ Any Credit or Debit Card
        </Text>
      </Alert>
    </Stack>
  );
};

export default DiscountHomepage;
