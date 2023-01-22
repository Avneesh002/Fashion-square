import { Button } from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Items = ({ id, title, Quantity, price, img }) => {
  const { removeProduct, increment, decrement } = useContext(CartContext);

  return (
    <>
      <div
        className="shadow"
        style={{
          textAlign: "center",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          marginLeft: "18%",
          marginTop: "51px",
          width: "67%",
          padding: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "91px",
            // marginBottom: "51px",
            // paddingTop: "61px",
            alignItems: "center",
          }}
        >
          <img style={{ width: "111px" }} src={img} alt="product" />
          <h2>{title}</h2>
          {/* <span>₹</span> */}
          <h2 style={{ width: "100px" }}>₹ {price}</h2>
          {/* <h2>{id}</h2> */}
          <button
            style={{
              borderRadius: "7px",
              width: "36px",
              height: "24px",
              backgroundColor: "#EDF2F7",
            }}
            disabled={Quantity == 1}
            onClick={() => decrement(id)}
          >
            {" "}
            -{" "}
          </button>
          <h2>{Quantity}</h2>
          <Button
            style={{ width: "31px", height: "24px" }}
            onClick={() => increment(id)}
          >
            {" "}
            +{" "}
          </Button>
          <Button p={"20px"} onClick={() => removeProduct(id)}>
            Remove
          </Button>
        </div>
      </div>
    </>
  );
};

export default Items;
