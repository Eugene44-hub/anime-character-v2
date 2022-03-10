import { createContext,useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {}


export const GlobalContext = createContext(initialState)


export const GlobalProvider = ({ children }) => {

const [state,dispatch]=useReducer(AppReducer,initialState)

const addToGallery=(data)=>{
dispatch({
    type:"LOAD-TO-GALLERY",
    payload:data
})
}

// const searchGallery=(input)=>{
// dispatch({
//     type:"SEARCH",
//     payload:input
// })
// }


  return ( <GlobalContext.Provider value={{
        data:state,
        addToGallery
        // searchGallery
    }}>
    {children}
    </GlobalContext.Provider>)

}