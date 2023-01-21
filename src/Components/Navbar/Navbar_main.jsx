import React from "react";
import "./Navbar_main.css";
import logo from "../../assets/Fashion-logo.png";
import { BsFillPencilFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";
// import { BsPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
// import { Button } from "@chakra-ui/react";
import { User } from "../../Pages/Signup_Login/User";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="logo">
            <Link to="/">
              <img width={180} src={logo} alt="" />
            </Link>
          </div>
          <nav>
            <ul>
              <li className="hover-effect">
                <a href="#">WOMEN</a>
              </li>
              <li className="hover-effect">
                <Link to="/products">
                  <a href="#">MEN</a>
                </Link>
                <div className="mega-menu">
                  <div className="mega-menu-items">
                    <h3>Top Wears</h3>
                    <ul>
                      <li>
                        <a href="#">T-Shirts</a>
                      </li>
                      <li>
                        <a href="#">Polo T Shirts</a>
                      </li>
                      <li>
                        <a href="#">Casual Shirts</a>
                      </li>
                      <li>
                        <a href="#">Formal Shirts</a>
                      </li>
                      <li>
                        <a href="#">Suits & Blazers</a>
                      </li>
                      <li>
                        <a href="#">Jackets</a>
                      </li>
                      <li>
                        <a href="#">Sweaters & Sweatshirts</a>
                      </li>
                    </ul>
                  </div>

                  <div className="mega-menu-items">
                    <h3>Ethnic Wear</h3>
                    <ul>
                      <li>
                        <a href="#">Kurtas</a>
                      </li>
                      <li>
                        <a href="#">Ethnic Wear Sets</a>
                      </li>
                      <li>
                        <a href="#">Nehru Jackets</a>
                      </li>
                      <li>
                        <a href="#">Ethnic Bottom Wear</a>
                      </li>
                    </ul>
                  </div>

                  <div className="mega-menu-items">
                    <h3>Footwear</h3>
                    <ul>
                      <li>
                        <a href="#">Casual Shoes</a>
                      </li>
                      <li>
                        <a href="#">Sports Shoes</a>
                      </li>
                      <li>
                        <a href="#">Casual Shirts</a>
                      </li>
                      <li>
                        <a href="#">Formal Shoes</a>
                      </li>
                      <li>
                        <a href="#">Jutis And Mojaris</a>
                      </li>
                      <li>
                        <a href="#">Slippers & Sandals</a>
                      </li>
                      <li>
                        <a href="#">Socks</a>
                      </li>
                    </ul>
                  </div>

                  <div className="mega-menu-items">
                    <h3>Accessories</h3>
                    <ul>
                      <li>
                        <a href="#">Caps And Hats</a>
                      </li>
                      <li>
                        <a href="#">Lapel Pins & Brooch</a>
                      </li>
                      <li>
                        <a href="#">Ties & Pocket Squares</a>
                      </li>
                      <li>
                        <a href="#">Cufflinks & Bracelets</a>
                      </li>
                      <li>
                        <a href="#">Suits & Blazers</a>
                      </li>
                      <li>
                        <a href="#">Handkerchiefs</a>
                      </li>
                      <li>
                        <a href="#">Headphones & Speakers</a>
                      </li>
                    </ul>
                  </div>

                  <div className="mega-menu-items">
                    <h3>Brands</h3>
                    <ul>
                      <li>
                        <a href="#">Arrow</a>
                      </li>
                      <li>
                        <a href="#">US Polo Assn</a>
                      </li>
                      <li>
                        <a href="#">Aeropostale</a>
                      </li>
                      <li>
                        <a href="#">Campus Sutra</a>
                      </li>
                      <li>
                        <a href="#">Ruggers</a>
                      </li>
                      <li>
                        <a href="#">Canary London</a>
                      </li>
                      <li>
                        <a href="#">Hang Up</a>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-items">
                    <h3>Bottom Wear</h3>
                    <ul>
                      <li>
                        <a href="#">Jeans</a>
                      </li>
                      <li>
                        <a href="#">Casual Trousers</a>
                      </li>
                      <li>
                        <a href="#">Formal Trousers</a>
                      </li>
                      <li>
                        <a href="#">Campus Sutra</a>
                      </li>
                      <li>
                        <a href="#">Joggers</a>
                      </li>
                      <li>
                        <a href="#">Shorts</a>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-items">
                    <h3>Sports Wear</h3>
                    <ul>
                      <li>
                        <a href="#">T-Shirts</a>
                      </li>
                      <li>
                        <a href="#">Shorts</a>
                      </li>
                      <li>
                        <a href="#">Formal Trousers</a>
                      </li>
                      <li>
                        <a href="#">Track Pants</a>
                      </li>
                      <li>
                        <a href="#">Track Suits</a>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-items">
                    <h3>Fragrances</h3>
                  </div>
                </div>
              </li>
              <li className="hover-effect">
                <a href="#">KIDS</a>
              </li>
              <li className="hover-effect">
                <a href="#">HOME</a>
              </li>
              <li className="hover-effect">
                <a style={{ color: "red", fontWeigth: "bold" }} href="#">
                  OFFERS
                </a>
              </li>
            </ul>
          </nav>

          <div className="header-item item-right">
            <div className="icon-box">
              <span className="icon-div">
                <BsFillPencilFill className="header-icon" />
                <p className="icon-name">SCRAPBOOKS</p>
              </span>

              <span className="icon-div">
                <AiOutlineSearch className="header-icon" />
                <p className="icon-name">SEARCH</p>
              </span>

              <span className="icon-div">
                <Link to="/cart" >
                  <HiShoppingCart className="header-icon" />
                  <p className="icon-name">CART</p>
                </Link>
              </span>

              <div className="icon-div">
                <User />
                {/* <BsPersonFill className="header-icon" /> */}
                {/* <div className="main-menu">
                  <ul>
                    <li className="icon-name hover-effect ">
                      <a href="#">PROFILE</a>
                      <div className="sub-menu-wrap">
                        <div className="sub-menu">
                          <div className="user-info">
                            <span>WELCOME!</span>
                            <p>To view account details</p>
                            <Link to="/login">
                              {" "}
                              <button className="login-btn">LOGIN</button>
                            </Link>
                          </div>
                          <br />
                          <hr />
                          <div className="order-board">
                            <span>ORDERS</span>
                            <br />
                            <span>RETURN REPLACEMENT</span>
                            <br />
                            <span>LR CREDITS</span>
                          </div>
                          <br />
                          <hr />
                          <div className="order-board">
                            <span>CUSTOMER SUPPORT</span>
                            <br />
                            <span>FAQ & HELP</span>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
