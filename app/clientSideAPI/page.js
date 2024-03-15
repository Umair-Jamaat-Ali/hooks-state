'use client'
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

export default function ClientSide() {

    const [product, setProduct] = useState([]);

async function getData() {
    await axios.get('https://fakestoreapi.com/products?limit=5').then((res)=>{

    console.log(res.data);
    setProduct(res.data)
    }).catch((error)=> {
        console.log(error);
    })
}

useEffect(()=>{
    getData()
},[])

  return (
    <>
    <div>ClientSide</div>
    {product?.map((item,index)=> {
        return (
            <div key={index}>
            <div>{item.title}</div>
            <div><img width={100} height={100} src={item.image}/></div>
            </div>
        )
    })}
    </>
  )
}
