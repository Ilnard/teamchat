import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import {socket} from "shared/api/socket"

export const apiChats = createApi({
    reducerPath: 'apiChats',
    baseQuery: fetchBaseQuery({
        baseUrl: '/server/api'
    }),
    endpoints: (builder) => ({
        getChats: builder.query({
            query: () => '/get-chats-data'
        }),
        getChat: builder.query({
            query: ({fromUserId, toUserId}) => `/get-chat-data/${fromUserId}/${toUserId}`,
            async onCacheEntryAdded(arg, {updateCachedData, cacheDataLoaded, cacheEntryRemoved}) {

                await cacheDataLoaded

                socket.on('add message', message => {
                    updateCachedData(draft => {
                        const messagesCount = draft.data.messages.length
                        const lastMessageId = draft.data.messages[messagesCount - 1] ? draft.data.messages[messagesCount - 1].id : -1
                        draft.data.messages.push({
                            id: lastMessageId + 1,
                            fromUserId: arg.toUserId,
                            toUserId: arg.fromUserId,
                            createdAt: new Date().toUTCString(),
                            updatedAt: new Date().toUTCString(),
                            message: message.message
                        })
                    })
                })

                await cacheEntryRemoved
            }
        }),
        getLastMessage: builder.query({
            query: ({fromUserId, toUserId}) => `/get-last-message/${fromUserId}/${toUserId}`,
            async onCacheEntryAdded(arg, {updateCachedData, cacheDataLoaded, cacheEntryRemoved}) {

                await cacheDataLoaded

                socket.on('add message', message => {
                    if (message.fromUserId === arg.toUserId) {
                        updateCachedData(draft => {
                            draft.data.fromUserId = arg.toUserId
                            draft.data.toUserId = arg.fromUserId
                            draft.data.message = message.message
                        })
                    }
                })

                await cacheEntryRemoved
            }
        }),
        sendMessage: builder.mutation({
            query: ({fromUserId, toUserId, message}) => ({
                url: `/send-message`,
                method: 'POST',
                body: {
                    fromUserId,
                    toUserId,
                    message
                }
            })
        }),

    }),
})

export const {
    useGetChatsQuery,
    useGetChatQuery,
    useGetLastMessageQuery,
    useSendMessageMutation
} = apiChats