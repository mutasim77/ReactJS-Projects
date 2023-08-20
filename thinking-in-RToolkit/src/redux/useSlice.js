import { createSlice } from "@reduxjs/toolkit";

export const useSlice = createSlice({
    name: 'user',
    initialState: {
        name: 'asdf',
        email: 'john@gmail.com'
    },
    reducers: {
        update: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
        },
        remove: (state) => (state = {})
    }
})

export const { update, remove } = useSlice.actions;
export default useSlice.reducer;