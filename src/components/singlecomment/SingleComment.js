import React from "react";
import '../../style/main.css';

export const SingleComment = (props) => {
    const comment = props.comment.data;
    const author = comment.author.charAt(0).toUpperCase();

    return (
        <div className="singlecomment">
            <div className="singlecomment__authorbar">
                <div className="singlecomment__authorbar__img">
                    <h2>{author}</h2>
                </div>
                <div className="singlecomment_authorbar__authorname">
                    <h4>{comment.author}</h4>
                </div>
            </div>

            <div className="singlecomment__body">
            <p>{comment.body}</p>    
            </div>

            <div className="singlecomment__separatorline"></div>
            
        </div>
    )
};