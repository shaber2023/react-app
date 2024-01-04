import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { rootapi } from './api/rootapi'
import authSlice from './api/authSlice'


export const store = configureStore({
  reducer: {
    [rootapi.reducerPath]:rootapi.reducer,
    auth:authSlice,
  },
  devTools:process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rootapi.middleware),
})

setupListeners(store.dispatch)