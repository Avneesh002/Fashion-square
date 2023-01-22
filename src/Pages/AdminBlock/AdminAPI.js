import axios from "axios";

export const getAllProducts = async () => {
  return await axios.get("https://fashionsquare-database.vercel.app/products");
};
