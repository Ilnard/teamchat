import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const apiAuth = createApi({
    reducerPath: 'apiAuth',
    baseQuery: fetchBaseQuery({
        baseUrl: '/server/api',
        credentials: 'include'
    }),
    endpoints: (builder) => ({
        registration: builder.mutation({
            query: (user) => ({
                url: '/registration',
                method: 'POST',
                body: user
            }),

        }),
        login: builder.mutation({
            query: (user) => ({
                url: '/login',
                method: 'POST',
                body: user
            })
        }),
        logout: builder.mutation({
            query: () => ({
                url: '/logout',
                method: 'POST'
            })
        })
    }),
})

export const {
    useRegistrationMutation,
    useLoginMutation,
    useLogoutMutation
} = apiAuth