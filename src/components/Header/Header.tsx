import React from "react";
import s from './Header.module.css';
import logo from "../../img/logo.png"

const Header: React.FC<any> = () => {
    return (
        <header className={s.header}>
            <img src={logo} alt="logo"/>
        </header>
    )
}
export default Header;
