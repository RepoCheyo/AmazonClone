import React, { createContext, useContext, useReducer } from "react";

// Prepara el dataLayer
export const StateContext = createContext();

// Envuelve toda la app y provee el dataLayer
export const StateProvider = ({reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Empuja la información desde el dataLayer
export const useStateValue = () => useContext(StateContext);
