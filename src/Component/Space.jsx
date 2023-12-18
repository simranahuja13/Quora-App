import React, { useState } from 'react'
import './css/space.css'
export default function Space() {
  
  // const [menu,setMenu]=useState(false)
  // const Openmenu =()=>{
   
  //   setMenu(!menu)
    
  // }
  return (
    <>
    {/* <div className="menu">
     <button>
      <span className='menuspan'></span>
      <span className='menuspan'></span>
      <span className='menuspan'></span></button>
    </div> */}
   
      <div className='space_container'>
      <div className='space createS'>
           <img src="./images/plus.svg" alt="" />
               <p>Create space</p>
           </div>
           <div className='space'>
               <img src="https://qph.cf2.quoracdn.net/main-thumb-t-3355-100-K90bqEIsedItSh1yxyYRzkGkML594dD1.jpeg" alt="" />
               <p>Music Industry</p>
           </div>
           <div className='space'>
           <img src="https://qph.cf2.quoracdn.net/main-thumb-t-3451-100-vvvhwelvamaxjlecyuuxtleqcrihfcdg.jpeg" alt="" />
               <p>Marvel Comics</p>
           </div>
           <div className='space'>
           <img src="	https://qph.cf2.quoracdn.net/main-thumb-t-1553-100-OLl3pIH6SNAJ32hA8k1UKc8INnS3v8Xb.jpeg" alt="" />
               <p>Healthy Eatings </p>
           </div>
           <div className='space'>
           <img src="https://qph.cf2.quoracdn.net/main-thumb-t-5142-100-3oEs32JMpxjxWobEk5LP5rqcAeupxl6c.jpeg" alt="" />
               <p>Cosmology</p>
           </div>
           <div className='space'>
           <img src="https://qph.cf2.quoracdn.net/main-thumb-t-931-100-c8WCPwZ9qPsh5zLGQ5wHh1ddxtc9Cch7.jpeg" alt="" />
               <p>Science</p>
           </div>
          
      </div>
    </>
  )
}
