import React, { useContext } from "react";
import FavCatCard from "./FavCatCard";
import { Context as CatContext } from "../contexts/CatContext";

const FavCatList = () => {

    const { favCat } = useContext(CatContext)
    console.log(favCat)

    if (favCat.len > 0) {
        return (
            <div>
                <h1>Have I proved my concept?</h1>
                {favCat.map((favCat, index) => {
                    return <FavCatCard key={index} catImg={favCat.url} catName={favCat.breeds[0].name} />
                })}
            </div>
        )
    }

    else {
        return (
            <div>
                <p>You have no favourited cats yet</p>
            </div>
        )
    }
}

export default FavCatList;