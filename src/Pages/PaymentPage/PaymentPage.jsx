import React, { useContext } from "react";
import "./Payment.css";
import { Link } from "react-router-dom";
import { CartContext } from "../cart/context/CartContext";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

const PaymentPage = () => {
  const { data, totalamount } = useContext(CartContext);
  return (
    <>
      <div className="outer-container">
        <div className="inner-left-container">
          <div className="detail-form-section">
            <div className="label">
              <span>Please Fill Address For Shipping</span>
            </div>
            <div className="details-form">
              <form>
                <div className="top-form">
                  <span>
                    <label>Pincode*</label>
                    <br />
                    <input className="no-outline" type="text" />
                  </span>
                  <span>
                    <label>Mobile Number*</label>
                    <br />
                    <input className="no-outline" type="text" />
                  </span>
                </div>
                <div className="personal-details">
                  <input
                    className="no-outline"
                    type="text"
                    placeholder="Full Name*"
                  />
                  <br />
                  <input
                    className="no-outline"
                    type="text"
                    placeholder="Flat/House No./ Building Name*"
                  />
                  <br />
                  <input
                    className="no-outline"
                    type="text"
                    placeholder="Colony / Locality / Road Name*"
                  />

                  <div
                    className="city-state"
                    style={{ display: "flex", gap: "30px" }}
                  >
                    <input
                      className="no-outline"
                      type="text"
                      placeholder="City"
                    />
                    <input
                      className="no-outline"
                      type="text"
                      placeholder="State"
                    />
                  </div>

                  <div className="gender-slector">
                    <label>
                      <input type="radio" name="gender" value="home" required />
                      Home
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="office"
                        required
                      />
                      Office
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Cart Section Starts */}

          {/* <div className="cart-section"> */}
          <Box
            p={"10px"}
            // border={"2px solid red"}
            display={"flex"}
            flexDir={"column"}
            gap={"10px"}
          >
            <h3>Cart Items {data.length} </h3>

            <Box height={"300px"} overflowX={"scroll"}>
              {data.map((el) => (
                <Flex
                  p={"10px"}
                  key={el.id}
                  align={"center"}
                  justifyContent={"space-around"}
                  width={"100%"}
                  boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
                >
                  <Image w={"100px"} src={el.img} alt="" />
                  <Text as="h1">{el.title}</Text>
                  <Text as="h1">{el.Quantity}</Text>
                  <Text as="h1">{el.price}</Text>
                </Flex>
              ))}
            </Box>

            <Link to={"/cart"}>
              <button className="edit-btn">Edit Cart</button>
            </Link>
            {/* </div> */}
          </Box>
        </div>
        <div className="inner-right-container">
          <div className="offer-tag">
            <div>
              <img
                style={{ width: "50px" }}
                src="https://img0.junaroad.com/images/icons/prepaid_icon.png"
                alt="tag"
              />
            </div>
            <div className="tag-details">
              <h4>Flat 10% Off On Your Order. No Upper Limit</h4>

              <span>
                Get Flat 10% Off On Your Purchase On Payment Via Paytm/ Gpay/
                Phonepe/ Net Banking/ Any Credit Or Debit Card
              </span>
            </div>
          </div>

          <label
            style={{
              position: "relative",
              top: "20px",
              color: "#757575",
              fontSize: "20px",
            }}
          >
            Payment Mode
          </label>
          <div className="cod">
            <span>Cash On Delivery</span>
          </div>
          <div className="payment-card">
            <div className="left-card-section">
              <div className="cards">
                <div className="single-card">
                  <p>Paytm</p>
                  <p>(Extra 10% off)</p>
                </div>
                <div className="single-card">
                  <p>Google Pay</p>
                  <p>(Extra 10% off)</p>
                </div>
                <div className="single-card">
                  <p>Phonepe / BHIM UPI</p>
                  <p>(Extra 10% off)</p>
                </div>
                <div className="single-card">
                  <p>ATM / Debit Card</p>
                  <p>(Extra 10% off)</p>
                </div>
                <div className="single-card">
                  <p>Credit Card</p>
                  <p>(Extra 10% off)</p>
                </div>
                <div className="single-card">
                  <p>Net Banking</p>
                  <p>(Extra 10% off)</p>
                </div>
              </div>
            </div>

            <div className="right-card-detail-section">
              <div className="pay-now">
                <p>Order Details</p>
                <div className="table-cont">
                  <div className="amount-table">
                    <span>Total Price</span>
                    <span>
                      <b>₹{totalamount}</b>
                    </span>
                  </div>

                  <div className="amount-table">
                    <span>Shipping Charges</span>
                    <span style={{ color: "#99CC33", fontWeight: "bold" }}>
                      FREE
                    </span>
                  </div>

                  <div className="amount-table">
                    <span>Amount Payable</span>
                    <span>
                      <b>₹{totalamount}</b>
                    </span>
                  </div>
                </div>
              </div>
              <button
                className="order-btn"
                onClick={() => {
                  alert("Your order Has been confirmed." + "\n" + "Thank You!");
                  window.location.href = "/";
                }}
              >
                CONFIRM ORDER
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
