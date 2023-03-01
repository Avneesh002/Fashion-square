import React from "react";
import { useEffect } from "react";
import styles from "../Product Page/Product.module.css";
import axios from "axios";
import SingleProduct from "./SingleProduct";
import Carousel from "better-react-carousel";
import { Stack } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";

import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, filterProduct } from "../../Redux/Product/Product.Action";

const Products = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store.products);

  const FilterByCategory = async (category) => {
    try {
      let response = await axios.get(
        "https://fashionsquare-database.vercel.app/products"
      );

      let data = response.data;

      let filterData = data.filter((item) => item.category.type === category);

      dispatch(filterProduct(filterData));
    } catch (err) {
      alert(err);
    }
  };

  const SortingLH = async () => {
    try {
      let response = await axios.get(
        "https://fashionsquare-database.vercel.app/products"
      );

      let data = response.data;

      let filterData = data.sort((a, b) => a.price - b.price);
      dispatch(filterProduct(filterData));
    } catch (err) {
      alert(err);
    }
  };
  const SortingHL = async () => {
    try {
      let response = await axios.get(
        "https://fashionsquare-database.vercel.app/products"
      );

      let data = response.data;

      let filterData = data.sort((a, b) => b.price - a.price);
      dispatch(filterProduct(filterData));
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className={styles.productContainer}>
      {/* ProductLeft */}

      <div className={styles.productLeft}>
        <div className={styles.productLeftTop}>
          <h5>All</h5>
          <p>1754 products</p>
        </div>
        <div className={styles.sorting_section}>
          <h4
            style={{
              fontWeight: "bold",
              fontSize: "12px",
              color: "black",
              padding: "10px 5px",
            }}
          >
            FILTER & SORT
          </h4>
          <Accordion allowMultiple>
            {/* SORT BY */}
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontSize={15}
                        fontWeight="bold"
                      >
                        Sort By
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel
                    pb={2}
                    cursor="pointer"
                    onClick={(e) => FilterByCategory(e.target.innerText)}
                  >
                    T-Shirts
                  </AccordionPanel>
                  <AccordionPanel
                    pb={2}
                    cursor="pointer"
                    onClick={(e) => FilterByCategory(e.target.innerText)}
                  >
                    Formal Shirts
                  </AccordionPanel>
                  <AccordionPanel
                    pb={2}
                    cursor="pointer"
                    onClick={(e) => FilterByCategory(e.target.innerText)}
                  >
                    Formal Shoes
                  </AccordionPanel>
                  <AccordionPanel pb={2} cursor="pointer" onClick={SortingHL}>
                    High Price
                  </AccordionPanel>
                  <AccordionPanel pb={2} cursor="pointer" onClick={SortingLH}>
                    Low Price
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            {/* PRICE */}
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontSize={15}
                        fontWeight="bold"
                      >
                        Price
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={2}>0 To 499</AccordionPanel>
                  <AccordionPanel pb={2}>500 To 999</AccordionPanel>
                  <AccordionPanel pb={2}>1000 To 1499</AccordionPanel>
                  <AccordionPanel pb={2}>1500 & above</AccordionPanel>
                </>
              )}
            </AccordionItem>
            {/* Discounts */}
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontSize={15}
                        fontWeight="bold"
                      >
                        Discounts
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={2}>1% to 20%</AccordionPanel>
                  <AccordionPanel pb={2}>21% To 50%</AccordionPanel>
                  <AccordionPanel pb={2}>50% & above</AccordionPanel>
                </>
              )}
            </AccordionItem>
            {/* brand   */}
            <AccordionItem
              className={styles.overflow}
              style={{
                overflowY: "scroll",
                height: "350px",
                position: "sticky",
              }}
            >
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontSize={15}
                        fontWeight="bold"
                      >
                        brand
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={2}>Asciiblues</AccordionPanel>
                  <AccordionPanel pb={2}>Ad By Arvind</AccordionPanel>
                  <AccordionPanel pb={2}>Allen Kniel</AccordionPanel>
                  <AccordionPanel pb={2}>AW</AccordionPanel>
                  <AccordionPanel pb={2}>Canary London</AccordionPanel>
                  <AccordionPanel pb={2}>Classic Polo</AccordionPanel>
                  <AccordionPanel pb={2}>Clogger International</AccordionPanel>
                  <AccordionPanel pb={2}>Copperline</AccordionPanel>
                  <AccordionPanel pb={2}>Deshbandhu Khadi</AccordionPanel>
                  <AccordionPanel pb={2}>Duke</AccordionPanel>
                  <AccordionPanel pb={2}>Fashion Fricks</AccordionPanel>
                  <AccordionPanel pb={2}>HATS OFF ACCESSORIES</AccordionPanel>
                  <AccordionPanel pb={2}>Mutaqinoti</AccordionPanel>
                  <AccordionPanel pb={2}>Levanse</AccordionPanel>
                  <AccordionPanel pb={2}>LOUIS STITCH</AccordionPanel>
                  <AccordionPanel pb={2}>Mountain Colours</AccordionPanel>
                  <AccordionPanel pb={2}>Recast</AccordionPanel>
                  <AccordionPanel pb={2}>Shuan</AccordionPanel>
                  <AccordionPanel pb={2}>V Mart</AccordionPanel>
                  <AccordionPanel pb={2}>Venitian</AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* ProductRight */}
      <div className={styles.productRight}>
        <div className={styles.categories}>
          <Stack>
            <Carousel alignItems="center" cols={9} rows={1} gap={10} loop>
              <Carousel.Item className={styles.categoriesItems}>
                <p className={styles.categoriesItems}>Top Wear T Shirts</p>
              </Carousel.Item>

              <Carousel.Item>
                <p className={styles.categoriesItems}>Casual Shirts</p>
              </Carousel.Item>
              <Carousel.Item>
                <p className={styles.categoriesItems}>Sweatshirts</p>
              </Carousel.Item>
              <Carousel.Item>
                <p className={styles.categoriesItems}>Jeans</p>
              </Carousel.Item>
              <Carousel.Item>
                <p className={styles.categoriesItems}>Kurtas</p>
              </Carousel.Item>
              <Carousel.Item>
                <p className={styles.categoriesItems}>Ethinic Wear Sets</p>
              </Carousel.Item>
              <Carousel.Item>
                <p className={styles.categoriesItems}>Formal Shirts</p>
              </Carousel.Item>
              <Carousel.Item>
                <p className={styles.categoriesItems}>Casual Trousers</p>
              </Carousel.Item>
              <Carousel.Item>
                <p className={styles.categoriesItems}>Track pants</p>
              </Carousel.Item>
              <Carousel.Item>
                <p className={styles.categoriesItems}>Casual Shirts</p>
              </Carousel.Item>
              <Carousel.Item>
                <p className={styles.categoriesItems}>Sweatshirts</p>
              </Carousel.Item>
              <Carousel.Item>
                <p className={styles.categoriesItems}>Jeans</p>
              </Carousel.Item>
              <Carousel.Item>
                <p className={styles.categoriesItems}>Kurtas</p>
              </Carousel.Item>
              <Carousel.Item>
                <p className={styles.categoriesItems}>Ethinic Wear Sets</p>
              </Carousel.Item>
              <Carousel.Item>
                <p className={styles.categoriesItems}>Formal Shirts</p>
              </Carousel.Item>
              <Carousel.Item>
                <p className={styles.categoriesItems}>Casual Trousers</p>
              </Carousel.Item>
              <Carousel.Item>
                <p className={styles.categoriesItems}>Track pants</p>
              </Carousel.Item>
            </Carousel>
          </Stack>
        </div>
        <div className={styles.allproducts}>
          {data &&
            data.map((card) => <SingleProduct key={card.id} {...card} />)}
        </div>
      </div>
    </div>
  );
};

export default Products;
