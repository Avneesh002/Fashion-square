import {
  Container,
  Card,
  CardBody,
  Text,
  Avatar,
  CardHeader,
  Box,
  Input,
  VStack,
  HStack,
  Heading,
  Stack,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import React from "react";

const Login = () => {
  return (
    <Container p={4}>
      <Stack spacing={6} align="stretch">
        <Card direction={"row"} alignItems={"center"}>
          <CardHeader>
            <Avatar
              size="xl"
              name="Segun Adebayo"
              src="https://bit.ly/sage-adebayo"
            />{" "}
          </CardHeader>
          <CardBody direction="column">
            <HStack>
              <Avatar
                size="sm"
                name="Segun Adebayo"
                src="https://bit.ly/sage-adebayo"
              />
              <Heading>SIGN IN</Heading>
            </HStack>
            <hr heigth={"2px"} />
            <Text fontSize="xl">sign in to proceed further</Text>
          </CardBody>
        </Card>
        <Box>
          <FormControl variant="floating">
            <Input variant="flushed" placeholder=" " />
            <FormLabel>Mobile Number</FormLabel>
          </FormControl>
        </Box>
      </Stack>
    </Container>
  );
};

export default Login;
