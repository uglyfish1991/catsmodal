import React, { useContext, useState } from 'react';
//It is good practise to use null not blank - otherwise the context will be undefined. Null is obviously intentional - undefined could reflect an error
export const Context = React.createContext(null);

export function BasketProvider({children}) {

    const [buyCat, setBuyCat] = useState(null)

    return (
        <Context.Provider value={{buyCat, setBuyCat}}>
            {children}
        </Context.Provider>
    )
}

//custom hooks always begin with use

export function useBuyCat(){
    return useContext(Context)
}

//d0n't need to export line 3 
// n0w pages that use the c0ntext can use the cust0m h00k - can use the call with useFavCat