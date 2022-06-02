import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getInitialPosts = createAsyncThunk(
    'posts/fetchInitialPosts', async () => {
        try {
            const response = await fetch('https://www.reddit.com/r/pic.json?limit=21');
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
            const response = await fetch(`https://api.reddit.com/r/${term}.json?limit=21`);
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
        subreddit: '',
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
            state.subreddit = 'pic';
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
            state.subreddit = action.payload.data.children[0].data.subreddit;
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
export const selectSubreddit = (state) => state.posts.subreddit;