import React from "react";
import '../../style/main.css';

export const SingleComment = (props) => {
    const comment = props.comment;

    return (
        <div className="singlecomment">
            <div className="singlecomment__authorbar">
                <div className="singlecomment__authorbar__img"></div>
                <div className="singlecomment_authorbar__authorname">
                    <h4>{props.comment.author}</h4>
                </div>
            </div>

            <div className="singlecomment__body">
            <p>{props.comment.body}</p>    
            </div>

            <div className="singlecomment__separatorline"></div>
            
        </div>
    )
};