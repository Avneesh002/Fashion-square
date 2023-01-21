import { NavLink } from "react-router-dom";
import React from "react";
import styles from "../Product Page/SingleProduct.module.css";

const SingleProduct = ({id, image, price, before_disc, brand, offer_percent }) => {
  return (
    <NavLink to={`/products/${id}`} >
      <div className={styles.singleProductContainer}>
        <div>
          <img src={image[0]} alt="product-image" />
        </div>
        <div className={styles.priceSection}>
          <span className={styles.price}>₹ {price}</span>
          <span className={styles.before_disc}>
            <s>₹{before_disc}</s>
          </span>
          <span className={styles.offer_percent}>{offer_percent}% off</span>
        </div>
        <p className={styles.brand}>By {brand}</p>
      </div>
    </NavLink>
  );
};

export default SingleProduct;
