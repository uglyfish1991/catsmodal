import React, { useContext, useState } from 'react';
export const Context = React.createContext(null);

export function CounterProvider({children}) {

    const [favCat, setFavCat] = useState([])

    return (
        <Context.Provider value={{favCat, setFavCat}}>
            {children}
        </Context.Provider>
    )
}

//custom hooks - cuist0m h00ks always begin with use

export function useFavCat(){
    return useContext(Context)
}

//d0n't need to export line 3 
// n0w pages that use the c0ntext can use the cust0m h00k - can use the call with useFavCat