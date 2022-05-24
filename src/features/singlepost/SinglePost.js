import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getPostData } from "./singlePostSlice";
import { selectSinglePost } from "./singlePostSlice";
import { Comments } from "../comments/Comments";
import '../../style/main.css';

export const SinglePost = (props) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const [ visible, setVisible ] = useState(false);
    const post = useSelector(selectSinglePost);
    const { permalink } = location.state;

    useEffect(() => {
        dispatch(getPostData(permalink));
    }, []);

    function handleClick() {
        if (visible) {
            setVisible(false)
        } else {
            setVisible(true);
        }
    };

    return (
        <div className="singlepost">
            <img className="singlepost__img" src={post.url_overridden_by_dest} alt=""/>
            <div className="singlepost__title">
                <h1>{post.title}</h1>
            </div>
            <div className="singlepost__text">
                <p>{post.selftext}</p>
            </div>

            <div className="singlepost__commentbtn" onClick={handleClick}>
                <h5>Comments</h5>
                <img className="singlepost__commentbtn__arrow" src="/img/singlepost/down arrow.svg" alt="" />
            </div>
            {visible && <Comments />}
        </div>
    )

}