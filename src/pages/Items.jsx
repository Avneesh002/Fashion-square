import { Button } from '@chakra-ui/react';
import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Items = ({id,title,Quantity,price,img}) => {
 
    const {removeProduct,increment,decrement}=useContext(CartContext)
     // console.log(incrlsement)
    
    // console.log(removeProduct)
 
    // console.log(Quantity)
    return (
        <>
        <div style={{marginLeft:"18%",marginTop:"51px"}} >
        <div style={{display:"flex",gap:"91px",marginBottom:"51px"}} >
            <img style={{width:"111px"}}  src={img} alt="product" />
            <h2>{title}</h2>
            <h2>{price}</h2>
            {/* <h2>{id}</h2> */}
            <button style={{borderRadius:"7px",width:"36px",height:"24px",backgroundColor:"#EDF2F7"}} disabled={Quantity==1} onClick={()=>decrement(id)} > - </button>
            <h2>{Quantity}</h2>
            <Button style={{width:"31px",height:"24px"}} onClick={()=>increment(id)} > + </Button>
            <Button onClick={()=>removeProduct(id)} >Remove</Button>
            </div>
             
             
            
        </div>
         
        

        </>
    );
};

export default Items;