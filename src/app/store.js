import { configureStore } from "@reduxjs/toolkit";
import postReducer from '../features/post/postSlice';
import commentsReducer from '../features/comments/commentsSlice';

const store = configureStore({
    reducer: {
        posts: postReducer,
        comments: commentsReducer,
    }
});

export default store;