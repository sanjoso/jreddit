import { createSlice } from "@reduxjs/toolkit";

const slice = {
    name: 'posts',
    initialState: [
        {
            id: 'ux123',
            title: 'Stary Night Sky',
            num_comments: 6000,
            selfText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            url_overridden_by_dest: '/img/post1.jpg',
            permalink: '/starrynightsky',
        },
        {
            id: 'ux456',
            title: 'Super Starry Sky',
            num_comments: 5997,
            selfText: 'Post 2! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            url_overridden_by_dest: '/img/post2.jpg',
            permalink: '/superstarrysky',
        },
    ],
    reducers: {
        getPosts: (state, action) => {
            return state.posts;
        }
    },
};


const postSlice = createSlice(slice);
export const { getPosts } = postSlice.actions;
export default postSlice.reducer;

export const selectPosts = (state) => state.posts;