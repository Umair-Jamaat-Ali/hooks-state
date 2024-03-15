'use client'
import React, { useEffect, useRef, useState } from 'react'

export default function Service() {

    const inputRef = useRef();
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0)

    useEffect(()=> {
        count.current = count.current + 1
    })

    const colorChangeHandler = () => {
        inputRef.current.focus();
        let colorPicker =  "" ;
        let color = "0123456789ABCDEF"
        for (let i = 0; i < 6; i++) {
            let char = Math.floor(Math.random() * color.length + 1)
            colorPicker += color.charAt(char)
        }
        inputRef.current.style.backgroundColor = '#' + colorPicker;
    }

  return (
    <>
    <div>
        <input 
        type='text' 
        name='inputValue'
        value={inputValue}
        onChange={(e)=> {setInputValue(e.target.value)}}
        />
        <p>Count of this number is {count.current}</p>
    </div>
    <div>
        <input type='text' ref={inputRef} className='border-blue-600'/>
        <button onClick={colorChangeHandler}>Change the color</button>
    </div>
    </>
  )
}
