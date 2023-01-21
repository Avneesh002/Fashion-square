
import axios from "axios";
import { ADMIN_FAILURE, ADMIN_REQUEST, ADMIN_SUCCESS } from "./Admin.actionType";

export const getAdminProduct = () =>async (dispatch) => {
    dispatch({type:ADMIN_REQUEST})
    try{
        let data= await axios.get("https://vintage-attire-deploy.onrender.com/product/admin",)   
        dispatch({type:ADMIN_SUCCESS})
        return data.data
    }catch(e) {
    dispatch({type:ADMIN_FAILURE})
}
}


export const patchAdminProduct = (payload) =>async (dispatch) => {
    
    dispatch({type:ADMIN_REQUEST})
    try{
        let data= await axios.patch("https://vintage-attire-deploy.onrender.com/product/admin",payload)   
        dispatch({type:ADMIN_SUCCESS})
    }catch(e) {
    dispatch({type:ADMIN_FAILURE})
}
}
export const deleteAdminProduct = (id) =>async (dispatch) => {
    dispatch({type:ADMIN_REQUEST})
       console.log(id)
    try{
        let data= await axios.delete(`https://vintage-attire-deploy.onrender.com/product/admin/${id}`) 
        // console.log(data)  
        dispatch({type:ADMIN_SUCCESS})
    }catch(e) {
    dispatch({type:ADMIN_FAILURE})
}
}
export const postAdminProduct = (payload) =>async (dispatch) => {
    // console.log(payload)
    dispatch({type:ADMIN_REQUEST})
    try{
        let data= await axios.post("https://vintage-attire-deploy.onrender.com/product/admin",payload)   
        // console.log(data)
        dispatch({type:ADMIN_SUCCESS})
    }catch(e) {
    dispatch({type:ADMIN_FAILURE})
}
}











export const getAdminCart = () =>async (dispatch) => {
    dispatch({type:ADMIN_REQUEST})
    try{
        let data= await axios.get("https://vintage-attire-deploy.onrender.com/product/admin/cart")   
        // let data= await axios.get("http://localhost:8080/cart",)   
            
            //     //   authorization: `Bearer ${token}`, //..get
        // console.log(data)
        dispatch({type:ADMIN_SUCCESS})
        return data.data
    }catch(e) {
        // console.log(e.message)
    dispatch({type:ADMIN_FAILURE})
}
}


export const patchAdminCart = (payload) =>async (dispatch) => {
    
    dispatch({type:ADMIN_REQUEST})
    try{
        let data= await axios.patch("https://vintage-attire-deploy.onrender.com/product/admin/cart",payload)   
        dispatch({type:ADMIN_SUCCESS})
    }catch(e) {
    dispatch({type:ADMIN_FAILURE})
}
}
export const deleteAdminCart = (id) =>async (dispatch) => {    
    dispatch({type:ADMIN_REQUEST})    
    try{
        let data= await axios.delete(`https://vintage-attire-deploy.onrender.com/product/admin/cart/${id}`)   
        dispatch({type:ADMIN_SUCCESS})
    }catch(e) {
    dispatch({type:ADMIN_FAILURE})
}
}











export const getAdminUser = () =>async (dispatch) => {
    dispatch({type:ADMIN_REQUEST})
    try{
        let data= await axios.get("https://vintage-attire-deploy.onrender.com/product/admin/User")   
        return data.data
    }catch(e) {
    dispatch({type:ADMIN_FAILURE})
}
}
export const deleteAdminUser = (id) =>async (dispatch) => {
    dispatch({type:ADMIN_REQUEST})
    try{
        let data= await axios.delete(`https://vintage-attire-deploy.onrender.com/product/admin/User/${id}`)   
        return data.data
    }catch(e) {
    dispatch({type:ADMIN_FAILURE})
}
}
export const updateAdminUser = (payload) =>async (dispatch) => {
    console.log(payload)
    dispatch({type:ADMIN_REQUEST})
    try{
        let data= await axios.patch(`https://vintage-attire-deploy.onrender.com/product/admin/User`,payload)   
        return data.data
    }catch(e) {
    dispatch({type:ADMIN_FAILURE})
}
}