import { createContext, useContext, useState } from "react";

import type { ReactNode, Dispatch, SetStateAction } from "react";
interface ContextProps{
    loaded: boolean
    setLoaded: Dispatch<SetStateAction<boolean>>
}
const InitContext = createContext<ContextProps|null>(null)

export function useInitContext(){
    const context = useContext(InitContext)
    if(!context)throw new Error('useInitContext in Provider!')
    return context
}

export function InitProvider({children}:{children:ReactNode}){
    const [loaded, setLoaded]=useState<boolean>(false)
    return(
        <InitContext.Provider value={{loaded,setLoaded}}>
            {children}
        </InitContext.Provider>
    )
}