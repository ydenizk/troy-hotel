"use client";

import { createContext, useState, useContext } from "react";

export const GeneralContext = createContext();

export const GeneralContextProvider = ({ children }) => {
  const [sideOpen, setSideOpen] = useState(false);
  const [logSideOpen, setLogSideOpen] = useState(false);

  const [secondOverlay, setSecondOverlay] = useState(false);

  const [loginState, setLoginState] = useState(false);

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");

  const [isLoading, setIsLoading] = useState(false); //reservation button da kullanacağız daha cok

  return (
    <GeneralContext.Provider
      value={{
        sideOpen,
        setSideOpen,
        loginState,
        setLoginState,
        phone,
        setPhone,
        note,
        setNote,
        secondOverlay,
        setSecondOverlay,
        logSideOpen,
        setLogSideOpen,
        isLoading,
        setIsLoading,
        showSuccessMessage, setShowSuccessMessage
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

//context i hook a atıoruz bu sefer ,kullanacağımız yerde sadce const{state ler}=usegerenalContext() yazıp kullan

/* export function useGeneralContext(GeneralContext){

    if(!context){
throw new Error("useGeneralContext should be used in generalContextProvider")
    }
return context
}

 */
