import React from "react";
import { Stack } from "@chakra-ui/react";
import MyFeedHomepage from "../../Components/HomepageComps/MyFeedHomepage";
import DiscountHomepage from "../../Components/HomepageComps/DiscountHomepage";
import CarouselHomepage from "../../Components/HomepageComps/CarouselHomepage";
import ProductsHomepage from "../../Components/HomepageComps/ProductsHomepage";

const Homepage = () => {
  return (
    <Stack align={"center"} bg={"#EEEEEE"}>
      <MyFeedHomepage />
      <DiscountHomepage />
      <CarouselHomepage />
      <ProductsHomepage />
    </Stack>
  );
};

export default Homepage;
