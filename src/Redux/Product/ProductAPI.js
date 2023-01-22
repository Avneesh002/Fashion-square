import axios from "axios";

export const getProductsAPI = async () => {
  let response = await axios.get(
    `https://fashionsquare-database.vercel.app/products`
  );
  return response.data;
};
