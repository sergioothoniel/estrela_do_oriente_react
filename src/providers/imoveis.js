import { createContext, useState, useContext } from "react";
import { dbImoveis } from "./database";

export const ImoveisContext = createContext()

export const ImoveisProvider = ({children}) =>{

    const [imoveisList, setImoveisList] = useState(dbImoveis)

    return(
        <ImoveisContext.Provider value={{imoveisList, setImoveisList}}>
            {children}
        </ImoveisContext.Provider>
    )
}

export const useImoveis = () => useContext(ImoveisContext)