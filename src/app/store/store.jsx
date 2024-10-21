import { configureStore } from "@reduxjs/toolkit"
import { apiChats } from 'shared/api/chatsAPI'
import { apiAuth } from 'shared/api/authAPI'
import currentUserReducer from 'app/userSlice'

const store =  configureStore({
    reducer: {
        [apiChats.reducerPath]: apiChats.reducer,
        [apiAuth.reducerPath]: apiAuth.reducer,
        currentUser: currentUserReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiChats.middleware).concat(apiAuth.middleware)
})
export { store }