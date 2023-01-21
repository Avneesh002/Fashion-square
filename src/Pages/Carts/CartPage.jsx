import React from "react";

import Items from "./Items";
import { Box, Button, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCartItems, getTotal } from "../../Redux/Cart/cart.Action";
import { TOTAL } from "../../Redux/Cart/cart.ActionType";

const Cart = () => {
  const cartItems = useSelector((store) => store.cartItems);
  const dispatch = useDispatch();

  const data = cartItems.data;
  const totalProducts = cartItems.totalProducts;
  const totalamount = cartItems.totalamount;

  useEffect(() => {
    dispatch({
      type: TOTAL,
    });
  }, [data]);

  const shipingcharge = 50;

  return (
    <>
      tatalProducts:{totalProducts}
      <div>
        {data.map((el) => (
          <Items key={el.id + Math.random()} {...el} />
        ))}
        <Box fontSize="18px" textAlign="right" marginLeft="64%" width={"24%"}>
          <Text>total M.R.P : &nbsp;&nbsp;{totalamount}</Text>
          <Text py="15px">Shiping Charge : &nbsp;&nbsp; ₹50</Text>
          <Text pb="15px">
            total amount : &nbsp;&nbsp; {totalamount + shipingcharge}
          </Text>
          {/* <Button
            mr="11px"
            background={"rgb(216, 96, 96)"}
            onClick={() => clearData()}
          >
            CLEAR CART
          </Button> */}
          <Button background={"green"}>PLACE ORDER</Button>
        </Box>
      </div>
    </>
  );
};

export default Cart;
