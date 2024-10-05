import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const chatsAPI = createApi({
    reducerPath: 'chatsAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://127.0.0.1:3000/api/'
    }),
    endpoints: (builder) => ({
        getChats: builder.query({
            query: () => 'get-chats-data',
        }),
        getChat: builder.query({
            query: (userId) => `get-chat-data/${userId}`,
        })
    }),
})

export const {
    useGetChatsQuery,
    useGetChatQuery
} = chatsAPI