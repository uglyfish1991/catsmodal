import React, { useContext } from "react";
import { Context as CatContext } from "../contexts/CatContext";

const AboutJeffers = () => {

    const {favCat} = useContext(CatContext)
    console.log(favCat)
    return (
        <div>
            <h1>Have I proved my concept?</h1>
            <p> {favCat} </p>
            </div>
            
// c0ndit0nal rrender c0s favcat will initially be null - tern 0p i fast 
// this ? true : false
    )
}

export default AboutJeffers;