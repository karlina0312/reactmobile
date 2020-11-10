import React, { createContext, useReducer } from 'react';
import {storeData} from './async';

const initialState = {
    version: null,
    user: null,
    score: [],
    firebaseToken: null,
    asyncReady: false,
    downloaded: false,
};

const GlobalContext = createContext(initialState);

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_USER":
            if (action.list === false) storeData('user', null);
            else storeData('user', action.list);
        return {
            ...state,
            user: action.list,
        }
        case "SET_STATUS":
            storeData('user', {...state.user, status: action.list});
        return {
            ...state,
            user: {...state.user, status: action.list}
        }
        case "SET_TOKEN": 
        return {
            ...state,
            firebaseToken: action.list
        }
        case "SET_DOWNLOADED": 
        return {
            ...state,
            downloaded: action.list
        }
        case "SET_SCORE":
            let newScore = [action.list, ...state.score];
            storeData('score', newScore); 
        return {
            ...state,
            score: newScore
        }
        case "SET_VERSION":
            storeData('version', action.list); 
        return{
            ...state,
            version: action.list
        }
        case "SET_CONTEXT":
console.log('setting async to context', action.list);
        return {
            ...action.list,
            asyncReady: true,
        }
        default:
        return state;
    }
};

const ContextState = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    return (
        <GlobalContext.Provider
            value={{
                state,
                dispatch
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}

export {
    GlobalContext,
    ContextState
};