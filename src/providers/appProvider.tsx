"use client";

import React, {createContext, useState} from 'react';

export const AppContext = createContext(null);
export const AppProvider = ({children}: {
    children: React.ReactNode
}) => {
    const [isLoading, setIsLoad] = useState<boolean>(false)
    const [locationSelected, setLocationSelected] =
        useState<{ lat: number, lng: number } | null>(null)

    const setIsLoading = (value: any) => {
        setIsLoad(value)
    }

    return (
        // @ts-ignore
        <AppContext.Provider value={{isLoading, setIsLoading, locationSelected, setLocationSelected}}>
            {children}
        </AppContext.Provider>
    );
}