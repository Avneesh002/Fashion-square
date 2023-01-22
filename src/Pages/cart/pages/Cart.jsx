import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Items from './Items';
import {Box, Button, Text, useEditable, useSafeLayoutEffect} from "@chakra-ui/react"
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';



// const getcrdData=()=>{
//     return fetch(`http://localhost:8000/cartItems`)
//     .then((res)=>res.json())
//  }


const Cart = () => {
    
// const [crd,setcrd]=useState([])

  const {data,clearData,totalProducts,totalamount}=useContext(CartContext)

    // console.log("qu",data[1].Quantity)
    // console.log("data",data[1].price)
    // console.log("price",totalamount)
    // console.log("quantity",totalProducts)

    const shipingcharge=50;
    
    
// useEffect(()=>{

    
//     getcrdData().then((res)=>setcrd(res))
// },[])

console.log("data",data)
    return (
        <>
          

        tatalProducts:{totalProducts}
        <div className='mainBox' >
            {
                data.map((el)=>(
                    <Items key={el.id+Math.random()}
                    {...el}
                    

                    />
                ))
            }
           <Box  fontSize="18px" textAlign="right" marginLeft="64%" width={"24%"} >

            
            <Text>total M.R.P : &nbsp;&nbsp;{totalamount}</Text>
            <Text py="15px" >Shiping Charge : &nbsp;&nbsp; ₹50</Text>
            <Text pb="15px" >total M.R.P : &nbsp;&nbsp; {totalamount+shipingcharge}</Text>
            <Button mr="11px" background={"rgb(216, 96, 96)"}  onClick={()=>clearData()} >CLEAR CART</Button>
        <Link to="/payment" > <Button background={"green"}  >PLACE ORDER</Button>  </Link>  
           </Box>
        </div>
        </>
    );
};

export default Cart;