import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Items from './Items';
import {Box, Button, Text} from "@chakra-ui/react"

const Cart = () => {
    

  const {data,clearData,totalProducts,totalamount}=useContext(CartContext)

    // console.log("qu",data[1].Quantity)
    // console.log("data",data[1].price)
    console.log("price",totalamount)
    console.log("quantity",totalProducts)

    const shipingcharge=50;
    

    return (
        <>
        tatalProducts:{totalProducts}
        <div>
            {
                data.map((el)=>(
                    <Items key={el.id+Math.random()}
                    {...el}
                    

                    />
                ))
            }
           <Box fontSize="18px" textAlign="right" marginLeft="64%" width={"24%"} >

            
            <Text>total M.R.P : &nbsp;&nbsp;{totalamount}</Text>
            <Text py="15px" >Shiping Charge : &nbsp;&nbsp; ₹50</Text>
            <Text pb="15px" >total amount : &nbsp;&nbsp; {totalamount+shipingcharge}</Text>
            <Button mr="11px" background={"rgb(216, 96, 96)"}  onClick={()=>clearData()} >CLEAR CART</Button>
            <Button background={"green"} >PLACE ORDER</Button>
           </Box>
        </div>
        </>
    );
};

export default Cart;