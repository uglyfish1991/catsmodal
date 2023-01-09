import React from "react";

const FavCatCard = ({catName, catImg}) =>{

    return(
        <>
        <h1>{catName}</h1>
        <img src={catImg}/>
        </>
        
    )
}

export default FavCatCard;