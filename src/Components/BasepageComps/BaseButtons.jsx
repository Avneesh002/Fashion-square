import { Button, Stack, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const BaseButtons = () => {
  const navigate = useNavigate();
  const handleHomepage = () => {
    navigate("/");
  };

  return (
    <Stack
      mt={"110px"}
      direction={useBreakpointValue({ base: "column", lg: "row" })}
      spacing="6"
    >
      <Button
        onClick={handleHomepage}
        h={"3rem"}
        w={"18rem"}
        fontWeight={"500"}
        fontSize="19px"
        bg={"#99CC33"}
        _hover={{
          bg: "#99CC33",
        }}
      >
        SHOP MEN
      </Button>
      <Button
        h={"3rem"}
        w={"18rem"}
        fontWeight={"500"}
        fontSize="19px"
        bg={"#99CC33"}
        _hover={{
          bg: "#99CC33",
        }}
      >
        SHOP WOMEN
      </Button>
    </Stack>
  );
};

export default BaseButtons;
