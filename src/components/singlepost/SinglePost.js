import React from "react";
import { useParams } from "react-router-dom";
import '../../style/main.css';

export const SinglePost = (props) => {
    const params = useParams();
    // Basically we'll fetch the specific post by the URL, and then extrac the data we need from it and render it. I don't think we need to access the store necessarily. The store just is used to map the posts in the feed view.

    return (
        <div className="singlepost">
            <img className="singlepost__img" src="/img/post2.jpg" alt=""/>
            <div className="singlepost__title">
                <h1>Super cool Fireplace post Picture from last Summer 2021.</h1>
            </div>
            <div className="singlepost__text">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with ther elease of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>

            <div className="singlepost__commentbtn">
                <h5>Comments</h5>
                <img className="singlepost__commentbtn__arrow" src="/img/singlepost/down arrow.svg" alt="" />
            </div>
        </div>
    )

}