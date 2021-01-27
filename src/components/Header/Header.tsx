import React from "react";
import s from './Header.module.css';
import logo from "../../img/logo.png"
import { NavLink } from 'react-router-dom';
import { logout } from './../../redux/auth-reducer';

const Header: React.FC<any> = (props:any) => {
    return (
        <header className={s.header}>
            <img src={logo} alt="logo"/>
            <div className={s.loginBlock}>
                {props.isAuth 
                ? <div>{props.login} - <button onClick={props.logout}>LOGOUT</button></div> 
                :<NavLink to={"/login"}>Login</NavLink>
}
            </div>
        </header>
    )
}
export default Header;
