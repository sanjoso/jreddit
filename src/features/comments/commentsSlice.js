import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchComments = createAsyncThunk(
    'comments/fetchComments', async (permalink) => {
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
        name: 'comments',
        initialState: {
            comments: [],
            isLoading: false,
            hasError: false,
        },
        reducers: {
            getComments: (state, action) => {
                return state.comments;
            }
        },
        extraReducers: {
            [fetchComments.pending]: (state, action) => {
                state.isLoading = true;
                state.hasError = false;
            },
            [fetchComments.fulfilled]: (state, action) => {
                state.isLoading = false;
                state.hasError = false;
                state.comments = action.payload[1].data.children;
            },
            [fetchComments.rejected]: (state, action) => {
                state.isLoading = false;
                state.hasError = true;
            },
        }
    }

    const commentsSlice = createSlice(slice);
    export const { getComments } = commentsSlice.actions;
    export default commentsSlice.reducer;

    export const selectComments = (state) => state.comments.comments;