import { createContext, useContext, useRef, useState } from "react";

export const ScrollContext = createContext();

export const ScrollProvider = ({children}) => {
    const sectionRefs = useRef([])

    return (
        <ScrollContext.Provider value={{sectionRefs}}>
            {children}
        </ScrollContext.Provider>
    )
}

export const useScroll = () => useContext(ScrollContext);