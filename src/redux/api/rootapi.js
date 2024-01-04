import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const rootapi = createApi({
  reducerPath:'api',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_ROOT_API,
    prepareHeaders:async(headers,{getState})=>{
      const token = getState()?.auth?.token;
      if (token) {
          headers.set('authorization', `Bearer ${token}`)
        }
        return headers;
  }
  }),
  tagTypes:['user'],
  endpoints: (builder) => ({}),
})


