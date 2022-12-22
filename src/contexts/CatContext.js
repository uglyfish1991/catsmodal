import React, { useContext, useState } from 'react';
//g00d practise to use null n0t blank - 0therwise will be undefined. ull is 0bivi0us/intenti0nal undefined c0uld be accident
export const Context = React.createContext(null);

export function CounterProvider({children}) {

    const [favCat, setFavCat] = useState(null)

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