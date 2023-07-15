import { combineReducers } from "redux";
import countReducer from "./counter";
import contactsReducer from "./contacts";


const appReducer = combineReducers({
    counter: countReducer,
    contacts: contactsReducer
})

export default appReducer;