import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPostData = createAsyncThunk(
    'singlepost/getPostData', async (permalink) => {
        try {
            const response = await fetch(`https://api.reddit.com/${permalink}.json`);
            const jsonResponse = await response.json();
            return jsonResponse;
        } catch (error) {
            console.log(error);
        }
    }
);

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
    extraReducers: {
        [getPostData.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [getPostData.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.hasError = false;
            state.singlepost = action.payload[0].data.children[0].data;
        },
        [getPostData.pending]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        },
    }
};

export const singlePostSlice = createSlice(slice);
export const { getSinglePost } = singlePostSlice.actions;
export default singlePostSlice.reducer;

export const selectSinglePost = (state) => state.singlepost.singlepost;