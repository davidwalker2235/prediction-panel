"use client";

import React, {createContext, useState} from 'react';
import {MarkersType} from "@/types/globalTypes";

export const AppContext = createContext(null);
export const AppProvider = ({children}: {
    children: React.ReactNode
}) => {
    const [isLoading, setIsLoad] = useState<boolean>(false)
    const [locationSelected, setLocationSelected] =
        useState<{ lat: number, lng: number } | null>(null)
    const [markers, setMarkers] = useState<MarkersType>([])

    const setIsLoading = (value: any) => {
        setIsLoad(value)
    }

    return (
        // @ts-ignore
        <AppContext.Provider value={
            {
                isLoading,
                setIsLoading,
                locationSelected,
                setLocationSelected,
                markers,
                setMarkers
            }
        }>
            {children}
        </AppContext.Provider>
    );
}
