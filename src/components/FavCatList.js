import React, { useContext } from "react";
import { Context as CatContext } from "../contexts/CatContext";

const FavCatList = () => {

    const { favCat } = useContext(CatContext)
    console.log(favCat)
    return (
        <div>
            <h1>Have I proved my concept?</h1>
            {favCat.map((catName, index)=>{
                return <CatCard key={index} catName={catName}/>
            })}
        </div>

        // c0ndit0nal rrender c0s favcat will initially be null - tern 0p i fast 
        // this ? true : false
    )
}

const CatCard = ({catName}) =>{
    return(
        <h1>{catName}</h1>
    )
}

export default FavCatList;