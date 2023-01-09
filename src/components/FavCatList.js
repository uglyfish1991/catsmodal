import React, { useContext } from "react";
import FavCatCard from "./FavCatCard";
import {Link} from "react-router-dom";
import { Context as CatContext } from "../contexts/CatContext";

const FavCatList = () => {

    const { favCat } = useContext(CatContext)
    console.log(favCat)

    console.log(favCat.length)

    if (favCat.length > 0) {
        return (
            <div>
                {favCat.map((favCat, index) => {
                    return <FavCatCard key={index} catImg={favCat.url} catName={favCat.breeds[0].name} />
                })}
            </div>
        )
    }

    else {
        return (
            <div>
                <p>You have no favourited cats, yet! Visit <Link to="/cats">Cats</Link> to find your new favourite furry friend!</p>
            </div>
        )
    }
}

export default FavCatList;