import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getPostData } from "./singlePostSlice";
import { selectSinglePost } from "./singlePostSlice";
import { Link } from "react-router-dom";
import '../../style/main.css';

export const SinglePost = (props) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const post = useSelector(selectSinglePost);
    const { permalink } = location.state;

    useEffect(() => {
        dispatch(getPostData(permalink));
    }, []);


    return (
        <div className="singlepost">
            <img className="singlepost__img" src={post.url_overridden_by_dest} alt=""/>
            <div className="singlepost__title">
                <h1>{post.title}</h1>
            </div>
            <div className="singlepost__text">
                <p>{post.selftext}</p>
            </div>

            <Link to='comments'  state={{permalink: permalink}}>
                <div className="singlepost__commentbtn">
                    <h5>Comments</h5>
                    <img className="singlepost__commentbtn__arrow" src="/img/singlepost/down arrow.svg" alt="" />
                </div>
            </Link>
        </div>
    )

}