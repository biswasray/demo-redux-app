import countReducer from "./counter";
import contactsReducer from "./contacts";
import { combineReducers } from "@reduxjs/toolkit";


const appReducer = combineReducers({
    counter: countReducer,
    contacts: contactsReducer
})

export default appReducer;