import React, { useState, createContext,useContext } from "react";
import { Context as BasketContext } from "../contexts/BasketContext";

const Basket = () => {

  const {buyCat} = useContext(BasketContext)
  console.log(buyCat)
  return (
      <div>
          <h1>Your Adoption Request</h1>
          <hr/>
          <p> {buyCat} </p>
          </div>
          
// c0ndit0nal rrender c0s favcat will initially be null - tern 0p i fast 
// this ? true : false
  )
}

export default Basket;