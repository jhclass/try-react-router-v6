import React from "react";
import {Link} from "react-router-dom";
function Header() {
    return (
        <header>
            <h1>로고입니다</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
            </ul>
        </header>
       
    );
    }
export default Header;