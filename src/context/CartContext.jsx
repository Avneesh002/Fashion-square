import React from 'react';
import { useEffect } from 'react';
import { useReducer } from 'react';

import { createContext } from 'react';


// import cartProducts from "../db.json"



import {reducer} from "./reducer.js"
import {REMOVE ,INCREMENTQUANTITY,DECREMENTQUANTITY,TOTAL } from "./type.js"
export const CartContext=createContext()



const CartContextProvider = ({children}) => {
  
    // let cartDATA=JSON.parse(localStorage.getItem("cartData"))

    // var List=JSON.parse(localStorage.getItem("dataList")) || []
    var List=JSON.parse(localStorage.getItem("cartdata")) || []
    
    console.log(List)
    
//  const getLocalCartData=()=>{

//     let localcartData=localStorage.getItem("cartdata") 

//     if(localcartData==[])
//     {
//         return []
//     }
//     else
//     {
//       return JSON.parse(localcartData)
//     }

//  }



    const initialState={
        
        data:[...List],
        
        totalamount:-1,
        totalProducts:0,
    
    }
    const [state, dispatch] = useReducer(reducer, initialState);
 

    const addProducts=(el)=>{
     console.log("element",el)
        dispatch({type:"ADD_TO_CART", payload:{el}})
        
    }



    const removeProduct=(id)=>{
        return dispatch({
            type:REMOVE,
            payload:id
        })
    }

    const clearData=()=>{
        return dispatch({
            type:"CLEAR",
        })
    }

    const increment = (id) => {
        return dispatch({
          type: INCREMENTQUANTITY,
          payload: id,
        });
      };

    const decrement=(id)=>{
        return dispatch({
            type:DECREMENTQUANTITY,
            payload:id
        })
    }  

    useEffect(()=>{
        dispatch({
            type:TOTAL,
             
        })
        // console.log("WRK")
    },[state.data])
    
    console.log(state.data)

    useEffect(()=>{
        localStorage.setItem("cartdata",JSON.stringify(state.data))
    },[state.data])


    return (
        <CartContext.Provider value={{...state,removeProduct,clearData,increment,decrement,addProducts}} >
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;