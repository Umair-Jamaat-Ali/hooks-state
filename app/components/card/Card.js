// import React from 'react'
// import BtnChild from '../btnChild/BtnChild'

// export default function Card({user}) {
//     let  {user} = props;
//   return (
//     <>
//     <div className='min-w-20 min-h-20 border-blue-500 '>
//         <h1>Card</h1>
//         <p>my name is {props.name} and my age is {props.age}</p>
//         <BtnChild {...user}/>
//     </div>
//     </>
//   )
// }

import React from 'react';
import BtnChild from '../btnChild/BtnChild';

export default function Card({ userData }) {
    if (!userData) {
        return null
    }
//   const { name, age } = userData; // Destructure user directly from props

  return (
    <>
      <div className='max-w-20 max-h-20 border-blue-500 '>
        <h1>Card</h1>
        {/* <p>My name is {name} and my age is {age}</p> Access name and age from user */}
        <BtnChild {...userData} />
      </div>
    </>
  );
}
