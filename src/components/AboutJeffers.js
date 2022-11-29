import React, { useContext } from "react";
import { Context } from "../contexts/Counter";

const AboutJeffers = () => {

    const [context,setContext] = useContext(Context)
    console.log(context)
    return (
        <div>
            <h1>Have I proved my concept?</h1>
            <p> {context}</p>
            </div>
            

    )
}

export default AboutJeffers;