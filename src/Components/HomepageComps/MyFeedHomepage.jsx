import React from "react";
import { Stack, Text, Avatar, useBreakpointValue } from "@chakra-ui/react";

const MyFeedHomepage = () => {
  return (
    <>
      <Stack
        w={useBreakpointValue({ base: "99%", lg: "60%" })}
        margin="auto"
        fontSize={"14px"}
        direction={"row"}
      >
        <Text _hover={{ cursor: "pointer" }} opacity={"50%"}>
          WOMEN
        </Text>
        <Text
          _hover={{ cursor: "pointer" }}
          textDecoration={"underline"}
          textDecorationColor={"green"}
          pl={"15px"}
        >
          MEN
        </Text>
      </Stack>
      <Stack
        pl={"20px"}
        direction={"row"}
        w={useBreakpointValue({ base: "99%", lg: "60%" })}
        m={"auto"}
      >
        <Stack align={"center"}>
          <Avatar
            border={"2px solid #c4dd91"}
            p={"2px"}
            size="lg"
            name="MY"
            src="https://img1.junaroad.com//assets/images/mobileNotif/img-1628498908811.jpg"
          />
          <Text fontWeight={"500"} fontSize={"10px"}>
            MY FEED
          </Text>
        </Stack>
        <div
          style={{
            backgroundColor: "black",
            width: "1px",
            height: "40px",
            opacity: "20%",
            marginTop: "30px",
            marginRight: "15px",
            marginLeft: "15px",
          }}
        ></div>
        <Stack
          overflow={useBreakpointValue({ base: "scroll", lg: "" })}
          gap={"19px"}
          align={"flex-end"}
          direction={"row"}
        >
          <Stack _hover={{ cursor: "pointer" }} align={"center"}>
            <Avatar
              size="md"
              name="Ryan Florence"
              src="https://img0.junaroad.com/images/icons/men/winter.png"
            />
            <Text fontWeight={"500"} fontSize={"9.5px"}>
              WINTER
            </Text>
          </Stack>

          <Stack _hover={{ cursor: "pointer" }} align={"center"}>
            <Avatar
              size="md"
              name="Ryan Florence"
              src="https://img0.junaroad.com/images/icons/men/tshirts.png"
            />
            <Text fontWeight={"500"} fontSize={"9.5px"}>
              T-SHIRT
            </Text>
          </Stack>

          <Stack _hover={{ cursor: "pointer" }} align={"center"}>
            <Avatar
              size="md"
              name="Ryan Florence"
              src="https://img0.junaroad.com/images/icons/men/shirts.png"
            />
            <Text fontWeight={"500"} fontSize={"9.5px"}>
              SHIRT
            </Text>
          </Stack>

          <Stack _hover={{ cursor: "pointer" }} align={"center"}>
            <Avatar
              size="md"
              name="Ryan Florence"
              src="https://img0.junaroad.com/images/icons/men/jeans.png"
            />
            <Text fontWeight={"500"} fontSize={"9.5px"}>
              JEANS
            </Text>
          </Stack>

          <Stack _hover={{ cursor: "pointer" }} align={"center"}>
            <Avatar
              size="md"
              name="Ryan Florence"
              src="https://img0.junaroad.com/images/icons/men/trousers.png"
            />
            <Text fontWeight={"500"} fontSize={"9.5px"}>
              TROUSERS
            </Text>
          </Stack>

          <Stack _hover={{ cursor: "pointer" }} align={"center"}>
            <Avatar
              size="md"
              name="Ryan Florence"
              src="https://img0.junaroad.com/images/icons/men/ethnicsets.png"
            />
            <Text fontWeight={"500"} fontSize={"9.5px"}>
              ETHNIC SETS
            </Text>
          </Stack>

          <Stack _hover={{ cursor: "pointer" }} align={"center"}>
            <Avatar
              size="md"
              name="Ryan Florence"
              src="https://img0.junaroad.com/images/icons/men/footwear.png"
            />
            <Text fontWeight={"500"} fontSize={"9.5px"}>
              FOOTWEAR
            </Text>
          </Stack>

          <Stack _hover={{ cursor: "pointer" }} align={"center"}>
            <Avatar
              size="md"
              name="Ryan Florence"
              src="https://img0.junaroad.com/images/icons/men/kids.png"
            />
            <Text fontWeight={"500"} fontSize={"9.5px"}>
              KIDS
            </Text>
          </Stack>

          <Stack _hover={{ cursor: "pointer" }} align={"center"}>
            <Avatar
              size="md"
              name="Ryan Florence"
              src="https://img0.junaroad.com/images/icons/women/home.png"
            />
            <Text fontWeight={"500"} fontSize={"9.5px"}>
              HOME
            </Text>
          </Stack>

          <Stack _hover={{ cursor: "pointer" }} align={"center"}>
            <Avatar
              size="md"
              name="Ryan Florence"
              src="https://img0.junaroad.com/images/icons/men/accessory.png"
            />
            <Text fontWeight={"500"} fontSize={"9.5px"}>
              ACCESSORY
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default MyFeedHomepage;
