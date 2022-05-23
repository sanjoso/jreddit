import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const slice = {
    name: 'singlepost',
    initialState: {
        singlepost: [],
        isLoading: false,
        hasError: false,
    },
    reducers: {
        getSinglePost: (state, action) => {
            return state.singlepost;
        }
    },
};

export const singlePostSlice = createSlice(slice);
export const { getSinglePost } = singlePostSlice.actions;
export default singlePostSlice.reducer;

export const selectSinglePost = (state) => state.singlepost.singlepost;