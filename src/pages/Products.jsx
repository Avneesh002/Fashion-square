import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const getData=()=>{
    return fetch(`http://localhost:8000/posts`)
    .then((res)=>res.json())
}

const Products = () => {

const [data,setData]=useState([])

useEffect(()=>{
   getData().then((res)=>setData(res))
},[])
// console.log("data")
// console.log(data)

    return (
        <div style={{display:"grid",gridTemplateColumns:"21% 21% 21% 21%"}} >
             {data.map((el)=>(
            
             <Link key={el.id} to={`/${el.id}`} ><div key={el.id} >
                <img src={el.image} width="211px" alt="" />
                <h2>{el.name}</h2>
                <h2>{el.price}</h2>
              </div>
              </Link>

             ))
             }
        </div>
    );
};

export default Products;



