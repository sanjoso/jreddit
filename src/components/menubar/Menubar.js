import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getSearchResults } from "../../features/post/postSlice";
import { useNavigate } from "react-router-dom";
import '../../style/main.css';

export const Menubar = (props) => {
    const [searchTerm, setSearchTerm] = useState('search reddit...');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleChange(event) {
        setSearchTerm(event.target.value)
    }

    function handleClick() {
        setSearchTerm('');
    }

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(getSearchResults(searchTerm));
        navigate("/");

    }

    return (
        <div className="menubar">
            
                <div className="menubar__logo" onClick={() => navigate("/")}>
                    <img className="menubar__logo__img" src="/img/menubar/mountain-icon-1.svg" alt="jReddit" />
                    <p className="menubar__logo__text">jReddit</p>
                </div>
            
            <div className="menubar__search" tabIndex="0">
                <img className="menubar__search__img" src="/img/menubar/search.svg" alt="" />
                <form onSubmit={handleSubmit}>
                    <input className="menubar__search__bar" value={searchTerm} onChange={handleChange} onClick={handleClick} autoComplete="off" autoCorrect="off" autoCapitalize="off" />
                </form>
            </div>
        </div>
    )
}