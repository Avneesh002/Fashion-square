import { Stack, Text } from "@chakra-ui/react";
import React from "react";
import Fade from "react-reveal/Fade";
import BaseTypewriter from "./BaseTypewriter";
import BaseButtons from "./BaseButtons";

const BaseContent = () => {
  return (
    <Stack pt={"25px"} align={"center"} h={"100vh"} bg={"blackAlpha.500"}>
      <Fade bottom>
        <Text color={"white"} fontSize={"38px"} fontWeight={"800"}>
          <i> Fashion Square</i>
        </Text>
      </Fade>

      <Fade bottom big>
        <Text mt={"120px"} fontSize={"32px"} color={"white"} fontWeight={"700"}>
          India's most loved
        </Text>
        <Text fontSize={"32px"} color={"white"} fontWeight={"700"}>
          <BaseTypewriter /> <span>platform</span>
        </Text>
      </Fade>

      <Fade>
        <BaseButtons />
        <Text
          mt={"15px"}
          fontWeight={"500"}
          color={"white"}
          fontSize={"16.5px"}
          _hover={{
            cursor: "pointer",
          }}
        >
          Have an account? Log in
        </Text>
        <Text
          mt={"20px"}
          fontWeight={"500"}
          color={"white"}
          _hover={{
            cursor: "pointer",
          }}
        >
          हिन्दी में देखे
        </Text>
      </Fade>
    </Stack>
  );
};

export default BaseContent;
