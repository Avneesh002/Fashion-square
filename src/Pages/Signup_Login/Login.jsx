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
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Floating_Input_Lebel from "../../Components/Floating_Input_Lebel";

const Login = () => {
  const { data } = useSelector((store) => store.auth);

  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (data.isAuth) {
      if (state.from) {
        navigate(state.from, { replace: true });
      } else {
        navigate("/");
      }
    }
  }, [data.isAuth]);

  return (
    <Container maxW="md" mt={6}>
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
            <Text fontSize="xl">sign in to proceed further</Text>
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
