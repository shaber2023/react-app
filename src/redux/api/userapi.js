import { rootapi } from "./rootapi";

const userapi = rootapi.injectEndpoints({
    endpoints:(builder)=>({
        getUserData:builder.query({
            query:()=>({
                method:'GET',
                url:'/api'
            }),
            providesTags:['user']
        }),
        getSingelUserData:builder.query({
            query:(id)=>({
                method:'GET',
                url:`/api/${id}`
            })
        }),
        createUserData:builder.mutation({
            query:(data)=>({
                method:'POST',
                url:'/api',
                body:data
            }),
            invalidatesTags:['user']
        }),
        deleteUserData:builder.mutation({
            query:(id)=>({
                method:'DELETE',
                url:`/api/${id}`
            }),
            invalidatesTags:['user']
        }),
        updateUserData:builder.mutation({
            query:({id,getData})=>({
                method:'PATCH',
                url:`/api/${id}`,
                body:getData
            }),
            invalidatesTags:['user']
        })
    })
})

export const{useGetUserDataQuery,useDeleteUserDataMutation,useGetSingelUserDataQuery,
                                useUpdateUserDataMutation,useCreateUserDataMutation}=userapi