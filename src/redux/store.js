import { configureStore } from '@reduxjs/toolkit'
import coderReducer from './coderSlice'

export const store = configureStore({
    reducer: {
        coder: coderReducer,
    },
})