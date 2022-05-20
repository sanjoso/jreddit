//this is the homepage view, or the main subreddit view. It will grab the posts from reddit, and then generate a <Post /> component for each post. Probably not too much here with dummy data, but will probably fill out nicely.

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPosts } from '../../features/post/postSlice';
import { Post } from "../../features/post/Post";
import { getInitialPosts } from "../../features/post/postSlice";
import '../../style/main.css';

export const Feed = () => {

     const dispatch = useDispatch();
    const posts = useSelector(selectPosts);

     useEffect(() => {
         dispatch(getInitialPosts());
     }, []);

    return (
        <div className="feed">
            {posts.map((post) => {
                return <Post post={post} key={post.id} />
            })}
        </div>
    )
}