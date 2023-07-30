import appReducer from "./reducers";
import { configureStore } from "@reduxjs/toolkit";

// const store = createStore(appReducer,applyMiddleware(thunk));
const store = configureStore({
    reducer: appReducer
});

export default store;