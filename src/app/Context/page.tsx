'use client'
import React, { createContext, useState } from 'react';
import { LibraryType, StateTypes } from '../AllDataType';
export interface ChildrenProps {
  children:React.ReactNode
}
export const PlaneContext = createContext<StateTypes>({} as StateTypes)
const PlaneProvider = ({children}:ChildrenProps) => {
  const [plan,setPlan]=useState<LibraryType[]>([])
  const [saved,setSaved]=useState<LibraryType[]>([])
 
  const AllContext:StateTypes ={
    plan,
    setPlan,
    saved,
    setSaved,
  }

  return <PlaneContext.Provider value={AllContext}>{children}</PlaneContext.Provider>
};

export default PlaneProvider;