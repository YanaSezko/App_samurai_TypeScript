import React from "react";
import s from './Navdar.module.css'

const Navbar=()=>{
    return(
        <nav className={s.nav}>
            <ul>
                <li><a href="#">Profile</a></li>
                <li><a href="#">Messages</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Music</a></li>
                <li><a href="#">Settings</a></li>
            </ul>
        </nav>
    )
}
export default Navbar;
