
import axios from "axios";

export const getProductsAPI = async () => {
  let response = await axios.get(`http://localhost:3000/products`);
  return response.data;
};