import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  Heading,
  SimpleGrid,
  Text,
  Grid,
  GridItem,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getAllProducts } from "./AdminAPI";

export const Dashboard = () => {
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalCategory, setTotalCategory] = useState(0);
  useEffect(() => {
    try {
      getAllProducts().then((res) => {
        setTotalProducts(res.data.length);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  const TotalDataShow = [
    { title: "Total Users", total: totalUsers },
    { title: "Total Category", total: totalCategory },
    { title: "Total Produts", total: totalProducts },
  ];

  return (
    <Grid
      gridTemplateRows={{
        lg: "repeat(2,1fr)",
        md: "repeat(2,1fr)",
        base: "repeat(1,1fr)",
      }}
      gap={"20px"}
      padding="10px"
    >
      <GridItem>
        <SimpleGrid
          gridTemplateColumns={{
            lg: "repeat(3,1fr)",
            md: "repeat(3,1fr)",
            base: "repeat(1,1fr)",
          }}
          gridTemplateRows="auto"
          gap={"20px"}
        >
          {TotalDataShow.map((ele, i) => (
            <Card key={i} maxW="lg" alignItems={"center"} boxShadow="dark-lg">
              <CardHeader>
                <Avatar
                  size="xl"
                  name="Christian Nwamba"
                  src="https://bit.ly/code-beast"
                />
              </CardHeader>
              <CardBody>
                <Text>10{ele.total}</Text>
                <Heading size="md">{ele.title}</Heading>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </GridItem>
      <GridItem>
        <SimpleGrid
        m="auto"
          gridTemplateColumns={{
            lg: "repeat(2,1fr)",
            md: "repeat(2,1fr)",
            base: "repeat(1,1fr)",
          }}
          gridTemplateRows="auto"
          gap={"20px"}
        >
          <Card maxW="lg" alignItems={"center"} boxShadow="dark-lg">
            <CardHeader>
              <Avatar
                size="xl"
                name="Christian Nwamba"
                src="https://bit.ly/code-beast"
              />
            </CardHeader>
            <CardBody>
              {/* <Text>10</Text> */}
              <Heading size="md">Add Category</Heading>
            </CardBody>
          </Card>
          <Card maxW="lg" alignItems={"center"} boxShadow="dark-lg">
            <CardHeader>
              <Avatar
                size="xl"
                name="Christian Nwamba"
                src="https://bit.ly/code-beast"
              />
            </CardHeader>
            <CardBody>
              {/* <Text>10</Text> */}
              <Heading size="md">Add Product</Heading>
            </CardBody>
          </Card>
        </SimpleGrid>
      </GridItem>
    </Grid>
  );
};

export default Dashboard;
