import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const chatsAPI = createApi({
    reducerPath: 'chatsAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://127.0.0.1:3000/api/'
    }),
    endpoints: (builder) => ({
        getChats: builder.query({
            query: () => 'get-chats-data',
            async onCacheEntryAdded(arg, { cacheDataLoaded, updateCachedData }) {
                const cache = await cacheDataLoaded
                const messages = cache.data
                console.log('cache: ', messages)
            }
        }),
        getChat: builder.query({
            query: ({fromUserId, toUserId}) => `get-chat-data/${fromUserId}/${toUserId}`,
        }),
        sendMessage: builder.mutation({
            query: ({fromUserId, toUserId, message}) => ({
                url: `send-message`,
                method: 'POST',
                body: {
                    fromUserId,
                    toUserId,
                    message
                }
            })
        })
    }),
})

export const {
    useGetChatsQuery,
    useGetChatQuery,
    useSendMessageMutation
} = chatsAPI