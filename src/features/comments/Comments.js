import React from "react";
import { useSelector } from "react-redux";
import { selectComments } from "./commentsSlice";
import { SingleComment } from "../../components/singlecomment/SingleComment";
import '../../style/main.css';

export const Comments = (props) => {
    const comments = useSelector(selectComments);

    return (
        <div className="comments">
            <div className="comments__backtopost">
                <h5>Back To Post</h5>
                <img className="comments__backtopost__arrow" src="/img/comments/up arrow.svg" alt="" />
            </div>

            <div className="comments__title">
                <h2>Comments (487)</h2>
            </div>


            <div className="comments__comment">
            {comments.map((comment) => {
                return <SingleComment comment={comment} key={comment.id} />
            })}
            </div>
        </div>
    )
}