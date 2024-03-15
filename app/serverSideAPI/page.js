import axios from 'axios'
import React from 'react'


const fetchData = async () => {
 let data =  await axios.get('https://fakestoreapi.com/products?limit=5')
 .then((res)=> {
 return res.data
 }).catch((err)=>{
    console.log(err);
 })
 return data
}

export default async function ServerSide() {
 let product = await fetchData();
  return (
    <>
    <div>ServerSide</div>
    {product?.map((i,index)=> {
        return(
            <div key={index}>
                <div>{i.title}</div>
            <div><img width={100} height={100} src={i.image}/></div>
            </div>
        )
    })}
    </>
  )
}
