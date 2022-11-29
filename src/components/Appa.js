import React, { useState, createContext,useContext } from "react";
import { SpinnerDotted } from 'spinners-react';
import { Context } from "../contexts/Counter";

const Appa = () => {

    const [context, setContext] = useContext(Context);
    return (
      <div>
        <h1>Set Context</h1>
        <button onClick={()=> setContext("I have proved my concept")}>Change Context to Yes</button>
      </div>
    );
  }

export default Appa;