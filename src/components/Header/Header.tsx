import React from "react";
import s from './Header.module.css';
import logo from "../../img/logo.png"
import { NavLink, Redirect } from 'react-router-dom';


const Header: React.FC<any> = (props:any) => {
    return (
        <header className={s.header}>
            <img src={logo} alt="logo"/>
            <div className={s.loginBlock}>
                {props.isAuth 
                ? <div>{props.login} - <button onClick={props.logout}>LOGOUT</button></div> 
                :  <div><NavLink to={"/login"}>Login</NavLink>
                    <Redirect to={"/login"}></Redirect></div>
                }
            </div>
        </header>
    )
}
export default Header;
