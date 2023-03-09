import React from "react";
import {Link, useNavigate} from "react-router-dom";
function Header() {
    const navigate = useNavigate();
    const onAboutClick = ()=> {
        navigate("/about");
    }
    return (
        <header>
            <h1>로고입니다</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </header>
       
    );
    }
export default Header;