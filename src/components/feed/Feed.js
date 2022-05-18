//this is the homepage view, or the main subreddit view. It will grab the posts from reddit, and then generate a <Post /> component for each post. Probably not too much here with dummy data, but will probably fill out nicely.

import React from "react";
import { selectPosts } from '../../features/post/postSlice';
import { useSelector } from "react-redux";
import { Post } from "../../features/post/Post";
import '../../style/main.css';

export const Feed = () => {

    const posts = useSelector(selectPosts);

    return (
        <div className="feed">
            {posts.map((post) => {
                return <Post post={post} key={post.id} />
            })}
        </div>
    )
}