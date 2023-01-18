import React from "react";
import { useEffect, useState } from "react";
import styles from "../Product Page/Product.module.css";
import axios from "axios";
import SingleProduct from "./SingleProduct";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  //   AccordionIcon,
  Box,
} from "@chakra-ui/react";

import { AddIcon, MinusIcon } from "@chakra-ui/icons";

const Products = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      let response = await axios.get("http://localhost:4444/products");

      let data = response.data;
      setProducts(data);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className={styles.productContainer}>
      {/* ProductLeft */}

      <div className={styles.productLeft}>
        <div className={styles.productLeftTop}>
          <h4>All</h4>
          <p>1754 products</p>
        </div>
        <div className={styles.sorting_section}>
          <h4 style={{ fontWeight: "bold", fontSize: "15px" }}>
            FILTER & SORT
          </h4>
          <Accordion allowMultiple>
            {/* SORT BY */}
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Sort By
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={2}>T-Shirts</AccordionPanel>
                  <AccordionPanel pb={2}>Formal Shirts</AccordionPanel>
                  <AccordionPanel pb={2}>Discount</AccordionPanel>
                  <AccordionPanel pb={2}>High Price</AccordionPanel>
                  <AccordionPanel pb={2}>Low Price</AccordionPanel>
                </>
              )}
            </AccordionItem>
            {/* PRICE */}
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
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
                      <Box as="span" flex="1" textAlign="left">
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
              style={{ overflowY: "scroll", height: "60px" }}
            >
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        position="sticky"
                        top="0"
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
          <p>TOP W</p>
        </div>
        <div className={styles.allproducts}>
          {products.map((card) => (
            <SingleProduct key={card.id} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
