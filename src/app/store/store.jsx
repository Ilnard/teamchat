import { configureStore } from "@reduxjs/toolkit";
import { chatsAPI } from 'shared/api/chatsAPI';

const store =  configureStore({
    reducer: {
        [chatsAPI.reducerPath]: chatsAPI.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(chatsAPI.middleware)
})

export { store }