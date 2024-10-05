import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { chatsAPI } from "shared/api/getChatsDataAPI.js";

const rootReducer = combineReducers({
    [chatsAPI.reducerPath]: chatsAPI.reducer
})

const store =  configureStore({
    reducer: {
        [chatsAPI.reducerPath]: chatsAPI.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(chatsAPI.middleware)
})

export { store }