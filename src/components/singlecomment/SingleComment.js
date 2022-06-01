import React from "react";
import '../../style/main.css';

export const SingleComment = (props) => {
    const comment = props.comment.data;
    let author;
    let name;
    if (comment.author) {
        author = comment.author.charAt(0).toUpperCase();
        name = comment.author;
    } else {
        author = 'U';
        name = 'Unknown';
    };

    return (
        <div className="singlecomment">
            <div className="singlecomment__authorbar">
                <div className="singlecomment__authorbar__img">
                    <h2>{author}</h2>
                </div>
                <div className="singlecomment_authorbar__authorname">
                    <h4>{name}</h4>
                </div>
            </div>

            <div className="singlecomment__body">
            <p>{comment.body}</p>    
            </div>

            <div className="singlecomment__separatorline"></div>
            
        </div>
    )
};