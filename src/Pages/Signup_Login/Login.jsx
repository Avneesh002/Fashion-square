import {
  Container,
  Card,
  CardBody,
  Text,
  Avatar,
  CardHeader,
  Box,
  HStack,
  Heading,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import Floating_Input_Lebel from "../../Components/Floating_Input_Lebel";

const Login = () => {
  return (
    // maxW='full' centerContent
    <Container maxW="md" mt={6} >
      <Stack maxW={"full"} gap={20} align="stretch">
        <Card
          direction={"row"}
          alignItems={"center"}
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          borderRadius={"0px"}
        >
          <CardHeader>
            <Avatar
              size="xl"
              name="Segun Adebayo"
              src="https://bit.ly/sage-adebayo"
            />
          </CardHeader>
          <CardBody direction="column">
            <HStack w={"200px"} p={2} borderBottom={"1px solid black"}>
              <Avatar
                size="sm"
                name="Segun Adebayo"
                src="https://bit.ly/sage-adebayo"
              />
              <Heading fontWeight={"semibold"}>SIGN IN</Heading>
            </HStack>
            <Text fontSize="xl" >
              sign in to proceed further
            </Text>
          </CardBody>
        </Card>
        <Box>
          <Floating_Input_Lebel />
        </Box> 
      </Stack>
    </Container>
  );
};

export default Login;
