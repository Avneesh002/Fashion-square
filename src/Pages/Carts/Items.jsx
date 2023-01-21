import React from "react";
import { Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import {
  decrement,
  getTotal,
  increment,
  removeItemFromCart,
} from "../../Redux/Cart/cart.Action";
import { useEffect } from "react";

// import { CartContext } from "../context/CartContext";

const Items = ({ id, title, Quantity, price, img }) => {
  const dispatch = useDispatch();


//   useEffect(()=>{
//     dispatch(getTotal());
//   },[])
  // console.log(incrlsement)

  // console.log(removeProduct)

  // console.log(Quantity)
  return (
    <>
      <div style={{ marginLeft: "18%", marginTop: "51px" }}>
        <div style={{ display: "flex", gap: "91px", marginBottom: "51px" }}>
          <img style={{ width: "111px" }} src={img} alt="product" />
          <h2>{title}</h2>
          <h2>{price}</h2>
          {/* <h2>{id}</h2> */}
          <button
            style={{
              borderRadius: "7px",
              width: "36px",
              height: "24px",
              backgroundColor: "#EDF2F7",
            }}
            disabled={Quantity == 1}
            onClick={() => dispatch(decrement(id))}
          >
            {" "}
            -{" "}
          </button>
          <h2>{Quantity}</h2>
          <Button
            style={{ width: "31px", height: "24px" }}
            onClick={() => dispatch(increment(id))}
          >
            {" "}
            +{" "}
          </Button>
          <Button onClick={() => dispatch(removeItemFromCart(id))}>
            Remove
          </Button>
        </div>
      </div>
    </>
  );
};

export default Items;
