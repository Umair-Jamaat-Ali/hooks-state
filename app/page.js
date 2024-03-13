'use client'
import React, { useState } from 'react'

export default function page() {
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

  return (
    <>
    <div className='bg-gray-700 w-full h-full mx-10'>
    <div>Admision form</div>
    <div className='flex column m-'> 
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
    </div>

    </>
  )
}

