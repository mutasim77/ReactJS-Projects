import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const updateUser2 = createAsyncThunk("users/update", async (user) => {
    const response = await axios.post(
        "http://localhost:8800/api/users/1/update",
        user
    );
    return response.data;
});

export const userSlice = createSlice({
    name: "user",
    initialState: {
        userInfo: {
            name: "john",
            email: "john@email.com",
        },
        pending: null,
        error: null,
    },
    reducers: {},
    extraReducers: {
        [updateUser2.pending]: (state) => {
            state.pending = true;
            state.error = false;
        },
        [updateUser2.fulfilled]: (state, action) => {
            state.userInfo = action.payload;
            state.pending = false;
        },
        [updateUser2.rejected]: (state) => {
            state.pending = false;
            state.error = true;
        },
    },
});