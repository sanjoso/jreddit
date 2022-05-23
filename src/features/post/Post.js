import React from "react";
import { Link } from "react-router-dom";

export const Post = (props) => {
    const post = props.post.data;

    function handleClick(event) {
        console.log(event);
    }

    return (
        <Link to={post.id} permalink={post.permalink} onClick={handleClick}>
            <div className="post">
                {post.post_hint === 'image' &&
                    <div className="post__img">
                        <img className="post__img__img" src={post.url_overridden_by_dest} alt={post.title} />
                    </div>
                }
                <div className="post__info">
                    <div className="post__title">
                        <h3>{post.title}</h3>
                    </div>
                    <div className="post__comments">
                        <img className="post__comments__img" src="/img/post/comments.svg" alt="" />
                        <p>{post.num_comments}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}