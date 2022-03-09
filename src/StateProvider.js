import React, {useReducer, createContext, useContext} from 'react';

export const StateContext = createContext();

export const StateProvider = ({reducer, initialState, children}) => {
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    );
};


//this is a  hook
export const useStateValue = () => useContext(StateContext);