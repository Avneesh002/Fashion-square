import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  Box,
} from "@chakra-ui/react";
import { BsWhatsapp } from "react-icons/bs";
import { TbJewishStar } from "react-icons/tb";
import { useContext } from "react";
import { CartContext } from "./cart/context/CartContext";

function getdata(id) {
  return fetch(`https://fashionsquare-database.vercel.app/products/${id}`).then(
    (res) => res.json()
  );
}

function SingleProductPage() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [click, setClick] = useState(true);
  const params = useParams();
  const { addProducts } = useContext(CartContext);

  const { removeProduct, increment, decrement } = useContext(CartContext);

  useEffect(() => {
    setLoading(true);
    getdata(params.id).then((res) => {
      setData(res);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <h1>...loading</h1>;
  }

  return (
    <>
      <Card
        width="80%"
        margin="auto"
        height="82vh"
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
      >
        <Image
          maxW={{ base: "100%", sm: "511px" }}
          src={data.image}
          alt="Caffe Latte"
        />
        <div style={{ marginLeft: "211px" }}></div>

        <Stack>
          <CardBody>
            <Heading size="lg">{data.title}</Heading>
            <Box textAlign="left" pb={11}>
              <Text py="3" textAlign="left" fontSize="1.2rem">
                {data.brand}
              </Text>
              <Text fontSize="1.5rem" mb="1.2rem">
                4 ⭐⭐⭐⭐
              </Text>
              <BsWhatsapp size={28} />
              <Text fontSize="1.2rem" my={21}>
                select size
              </Text>
              <Box>
                {data.size &&
                  data.size.map((el) => (
                    <Button key={el} ml="11px">
                      {el}
                    </Button>
                  ))}
              </Box>

              <Text mt="21" fontSize="1.3rem">
                M.R.P.
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {":"}
                <del> {data.before_disc} </del>
              </Text>
              <Text color={"green"} mt="2" fontSize="1.5rem">
                {"Price"}{" "}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {":"}
                {data.price}
              </Text>
              <Text mt="2" fontSize="1.2rem">
                You Save
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {":"} {data.offer_percent}
              </Text>
            </Box>
          </CardBody>

          <CardFooter>
            <Button variant="solid" colorScheme="blue" mr="2" p={25}>
              <TbJewishStar />
            </Button>
            <Box
              pl="0px"
              textAlign="left"
              w="111%"
              onClick={() => setClick(!click)}
            >
              {click ? (
                <Button
                  onClick={() => addProducts(data)}
                  variant="solid"
                  width="81%"
                  colorScheme="blue"
                  p={25}
                >
                  ADD TO CART
                </Button>
              ) : (
                <Button
                  onClick={() => removeProduct(data.id)}
                  style={{ backgroundColor: "red" }}
                  width="81%"
                  colorScheme="blue"
                  p={25}
                >
                  Remove From Cart
                </Button>
              )}
            </Box>
          </CardFooter>
        </Stack>
      </Card>
    </>
  );
}
export default SingleProductPage;
