// set up data layer
// we need this to track the basket

import React, { createContext, useContext, useReducer } from "react";

// THIS IS THE DATA LAYER

export const StateContext = createContext();

// BUILD A PROVIDER

export const StateProvider = ({ reducer, initialState, children}) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
  {children}
  </StateContext.Provider>
);

// THis is how we use it inside a component

export const useStateValue = () => useContext(StateContext);
