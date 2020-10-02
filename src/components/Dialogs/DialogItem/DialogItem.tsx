import React from "react";
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DilogType = {
    name: string
    id: number
}
const DialigItem = (props: DilogType) => {
    return (
        <li className={s.dialog + " " + s.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </li>
    )
}

export default DialigItem;
