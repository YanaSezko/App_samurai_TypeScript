import React from "react";
import s from './Header.module.css'

const Header: React.FC<any> = () => {
    return (
        <header className={s.header}>
            <img src="https://cdn.icon-icons.com/icons2/1698/PNG/256/60instagramhighlighticons117_112130.png"
                 alt="logo"/>
        </header>
    )
}
export default Header;
