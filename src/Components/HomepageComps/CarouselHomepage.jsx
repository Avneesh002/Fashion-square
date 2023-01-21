import React from "react";
import Carousel from "better-react-carousel";
import { Stack, useBreakpointValue } from "@chakra-ui/react";

const CarouselHomepage = () => {
  return (
    <Stack w={useBreakpointValue({ base: "99%", lg: "62.5%" })}>
      <Carousel hideArrow showDots autoplay={5000} cols={2} rows={1} loop>
        <Carousel.Item>
          <img
            alt="."
            width="100%"
            src="https://img1.junaroad.com//assets/images/mobileNotif/img-1657799410925.jpg?crsl_pos=0"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            alt="."
            width="100%"
            src="https://img1.junaroad.com//assets/images/mobileNotif/img-1672290419954.jpg?crsl_pos=0"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            alt="."
            width="100%"
            src="https://img1.junaroad.com//assets/images/mobileNotif/img-1674044135107.jpg?crsl_pos=0"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            alt="."
            width="100%"
            src="https://img0.junaroad.com/images/banners/B2G1_13january2023_1673587401792.jpg?crsl_pos=0"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            alt="."
            width="100%"
            src="https://img1.junaroad.com//assets/images/mobileNotif/img-1667388470485.jpg?crsl_pos=0"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            alt="."
            width="100%"
            src="https://img1.junaroad.com//assets/images/mobileNotif/img-1658918101342.jpg?crsl_pos=0"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            alt="."
            width="100%"
            src="https://img1.junaroad.com//assets/images/mobileNotif/img-1667988209100.jpg?crsl_pos=0"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            alt="."
            width="100%"
            src="https://img1.junaroad.com//assets/images/mobileNotif/img-1652694665568.jpg?crsl_pos=0"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            alt="."
            width="100%"
            src="https://img1.junaroad.com//assets/images/mobileNotif/img-1661924796571.jpg?crsl_pos=0"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            alt="."
            width="100%"
            src="https://img1.junaroad.com//assets/images/mobileNotif/img-1674029296684.jpg?crsl_pos=0"
          />
        </Carousel.Item>
      </Carousel>
    </Stack>
  );
};

export default CarouselHomepage;
