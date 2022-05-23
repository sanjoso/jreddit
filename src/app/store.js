import { configureStore } from "@reduxjs/toolkit";
import postReducer from '../features/post/postSlice';
import commentsReducer from '../features/comments/commentsSlice';
import singlePostReducer from '../features/singlepost/singlePostSlice';

const store = configureStore({
    reducer: {
        posts: postReducer,
        comments: commentsReducer,
        singlepost: singlePostReducer,
    }
});

export default store;