import axios from "axios"


export const getAllProducts=async()=>{
    return await axios.get("http://localhost:3000/products")
}