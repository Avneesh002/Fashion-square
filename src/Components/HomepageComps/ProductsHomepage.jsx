import React from "react";
import { useState } from "react";
import {
  Stack,
  SimpleGrid,
  Text,
  useBreakpointValue,
  Avatar,
} from "@chakra-ui/react";
import axios from "axios";
import { BsSuitHeart, BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";

const ProductsHomepage = () => {
  const [data, setData] = useState([]);
  const [liked, setLiked] = useState(false);
  const [heart, setHeart] = useState([]);

  const handleWhatsapp = (link) => {
    window.location.href = link;
  };

  const handleLike = async (id, likes) => {
    if (heart.length > 0) {
      for (let i = 0; i < heart.length; i++) {
        if (heart[i] === id) {
          let newLikes = likes - 1;

          let d = await axios.patch(
            `https://fashionsquare-database.vercel.app/homepageProducts/${id}`,
            {
              fs10: newLikes,
            }
          );
          heart[i] = 0;
          setLiked(!liked);

          return;
        }
      }
    }

    let newLikes = likes + 1;
    let d = await axios.patch(
      `https://fashionsquare-database.vercel.app/homepageProducts/${id}`,
      {
        fs10: newLikes,
      }
    );
    setLiked(!liked);

    setHeart([...heart, +id]);
  };

  const getData = async () => {
    try {
      await axios
        .get(`https://fashionsquare-database.vercel.app/homepageProducts`)
        .then((res) => setData(res.data));
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    getData();
  }, [liked]);

  return (
    <SimpleGrid
      pt={"10px"}
      w={useBreakpointValue({ base: "99%", lg: "60%" })}
      gap={"15px"}
      columns={{ base: 1, sm: 2, lg: 3 }}
    >
      {data?.map((el) => (
        <Stack align={"flex-start"} bg={"white"} p={"12px"} key={el.id}>
          <Text pl={"7px"} fontSize={"19px"}>
            {el.title}
          </Text>

          <Link to="/products">
            <img
              style={{
                cursor: "pointer",
              }}
              src={el.img}
              alt=""
            />
          </Link>

          <Stack pl={"5px"} direction={"row"}>
            <Stack align={"center"}>
              <Avatar size={"xs"} src={el.userImg} />
            </Stack>

            <Stack fontWeight={"500"} lineHeight={"10px"}>
              <Stack direction={"row"}>
                <Text fontSize={"13px"} opacity={"70%"}>
                  By
                </Text>
                <Text fontSize={"15px"}>{el.user}</Text>
              </Stack>
              <Text fontSize={"13px"} opacity={"70%"}>
                {el.followers} Followers
              </Text>
            </Stack>
            <Stack position={"relative"} bottom="40px" direction={"row"}>
              <Stack align={"center"}>
                <Stack
                  onClick={() => handleLike(el.id, el.fs10)}
                  _hover={{
                    cursor: "pointer",
                  }}
                  bg={"white"}
                  w={"50px"}
                  h={"50px"}
                  borderRadius={"50%"}
                  boxShadow={"2px 1px 5px 1px"}
                  align="center"
                  justify={"center"}
                >
                  <BsSuitHeart color="#D3145A" fontSize={"32px"} />
                </Stack>
                <Text fontWeight={"500"} fontSize={"11px"}>
                  {el.fs10} Likes
                </Text>
              </Stack>
              <Stack>
                <Stack align={"center"}>
                  <Stack
                    onClick={() => handleWhatsapp(el.whatsappLink)}
                    align="center"
                    justify={"center"}
                    _hover={{
                      cursor: "pointer",
                    }}
                    w={"50px"}
                    bg={"white"}
                    boxShadow={"2px 1px 5px 1px"}
                    h={"50px"}
                    borderRadius={"50%"}
                  >
                    <BsWhatsapp fontSize={"32px"} color={"#9FDA65"} />
                  </Stack>
                  <Text fontWeight={"500"} fontSize={"11px"}>
                    Share
                  </Text>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      ))}
    </SimpleGrid>
  );
};

export default ProductsHomepage;
