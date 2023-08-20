import { configureStore } from "@reduxjs/toolkit";
import userReducer from './useSlice';

export default configureStore({
    reducer: {
        user: userReducer
    }
})