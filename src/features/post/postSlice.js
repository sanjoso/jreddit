import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getInitialPosts = createAsyncThunk(
    'posts/getInitialPosts', async () => {
        try {
            const response = await fetch('https://www.reddit.com/r/pic.json');
            const jsonResponse = await response.json();
            return jsonResponse;
        } catch (error) {
            console.log(error);
        }
    }
);

export const getSearchResults = createAsyncThunk(
    'posts/getSearchResults', async (term) => {
        try {
            const response = await fetch(`http://api.reddit.com/r/${term}.json`);
            const jsonResponse = await response.json();
            return jsonResponse;

        } catch (error) {
            console.log(error);
        }
    }
)

const slice = {
    name: 'posts',
    initialState: {
        posts: [],
        isLoading: false,
        hasError: false,
    },

    reducers: {
        getPosts: (state, action) => {
            return state.posts;
        }
    },
    extraReducers: {
        [getInitialPosts.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [getInitialPosts.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.hasError = false;
            state.posts = action.payload.data.children;
        },
        [getInitialPosts.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        },

        
        [getSearchResults.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [getSearchResults.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.hasError = false;
            state.posts = action.payload.data.children;
        },
        [getSearchResults.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        },
    },
};


const postSlice = createSlice(slice);
export const { getPosts } = postSlice.actions;
export default postSlice.reducer;

export const selectPosts = (state) => state.posts.posts;