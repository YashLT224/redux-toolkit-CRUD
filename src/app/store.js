import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { postDataApi } from "../services/post";
import counterReducer from '../features/Counter/counterSlice'
import themeReducer from '../features/theme/themeSlice'
export const store=configureStore({
    reducer:{
        counterme: counterReducer,
        theme: themeReducer,
        [postDataApi.reducerPath]:postDataApi.reducer
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat (postDataApi.middleware),
    
})

setupListeners(store.dispatch)