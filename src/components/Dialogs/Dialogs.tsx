import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DilogType={
    name:string
}
type dialogsItemsType={
    users:Array<DilogType>
}
type MessageType={
    message: string
}
type MessagesType={
    messages:Array<MessageType>
}

const Dialogs: React.FC<any> = () => {
    return (
        <div className={s.dialogs}>
            <ul className={s.dialogsItems}>
                <li className={s.dialog +" "+ s.active}><NavLink to="/dialogs/1">Yana</NavLink></li>
                <li className={s.dialog}><NavLink to="/dialogs/2">Olya</NavLink></li>
                <li className={s.dialog}><NavLink to="/dialogs/3">Vova</NavLink></li>
                <li className={s.dialog}><NavLink to="/dialogs/4">Alex</NavLink></li>
                <li className={s.dialog}><NavLink to="/dialogs/5">Zlata</NavLink></li>
            </ul>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Hello</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>Yo</div>
            </div>


        </div>
    )
}
export default Dialogs;
