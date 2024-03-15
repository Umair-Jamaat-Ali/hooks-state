'use client'
import React, { useEffect, useReducer, useState } from 'react'
import Card from './components/card/Card'
import Link from 'next/link';

export default function page() {

  const reducer = (state,action)=> {

    if (action.type === "decreament") {
      // state = state - 1
      let mynum = 0;
      state > 1 ? (mynum = state - 1) : (mynum = 0)
      return mynum
    }
    if (action.type === "increament") {
      state = state + 1
      
    }
    return state
  }

  const [count, setCount] = useState(0)


  const inivalue = 0;

  const [reduCount, dispatch] = useReducer(reducer, inivalue)

  const [screenWidth, setScreenWidth] = useState(window.screen.width)

  const resizeScreenHandler = () => {
    setScreenWidth(()=> window.innerWidth)
  }

  useEffect(()=> {
    window.addEventListener("resize", resizeScreenHandler)
    return () => {
      window.removeEventListener("resize", resizeScreenHandler)
    }
  })


    const [form, setForm] = useState({
        username : "",
        email : "",
        password : "",
        confirm_password : ""
    });

    const changeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);

        setForm((prev)=> {
            return {...prev, [name] : value}
        })
    }

    useEffect(()=>{
      document.title = count;
    },[count]);

    const userData = {
      name : "umair",
      age: "27"
    }

  return (
    <>
    <div className='bg-gray-700 w-full h-full px-[150px]'>
    <div>Admision form</div>
    <div className='flex flex-col'> 
        <label>Enter Your Name</label>
    <input placeholder='enter your name' value={form.username} name='username' onChange={changeHandler}/>
    <label>Enter email</label>
    <input placeholder='enter your email' value={form.email} name='email' onChange={changeHandler}/>
    <label>Enter password</label>
    <input placeholder='enter your password' value={form.password} name='password' onChange={changeHandler}/>
    <label>Enter confirm password</label>
    <input placeholder='confirm password' value={form.confirm_password} name='confirm_password' onChange={changeHandler}/>
    </div>
    <div>
      <p>{`the user name is ${form.username} and email is ${form.email}`}</p>
    </div>
    <div>
      <button onClick={()=>{setCount(count - 1)}}>-</button>
      {count}
      <button onClick={()=>{setCount(count + 1)}}>+</button>
    </div>
    <div>
      <h1>Your Screen Width is {screenWidth}</h1>
    </div>
    </div>
    <Card userData={userData}/>
    <div>
      <button onClick={()=> {dispatch({type:"decreament"})}}>-</button>
      {reduCount}
      <button onClick={()=> {dispatch({type:"increament"})}}>+</button>
    </div>
    <li><Link href="/service">Services Page</Link></li>
    <li><Link href="/clientSideAPI">Client Side Page</Link></li>
    <li><Link href="/serverSideAPI">Server Side Page</Link></li>
    </>
  )
}

