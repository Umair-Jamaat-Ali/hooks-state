import React from 'react'

export default function BtnChild({userData}) {
    if (!userData) {
        return null
    }
    // const {name, age} = userData;
  return (
    <>
    {/* <button className='w-20 h-20 border-blue-700'>{}</button> */}
    <div>
        <h1> user name is {userData.name} and his age {userData.age}</h1>
    </div>
    </>
  )
}
