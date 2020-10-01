import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DilogType = {
    name: string
    id: string
}
type dialogsItemsType = {
    users: Array<DilogType>
}
type MessageType = {
    message: string
}
type MessagesType = {
    messages: Array<MessageType>
}

const DialigItem = (props: DilogType) => {
    return (
        <li className={s.dialog + " " + s.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </li>
    )
}
const Message = (props: MessageType) => {
    return <div className={s.message}>{props.message}</div>
}

const Dialogs: React.FC<any> = () => {
    return (
        <div className={s.dialogs}>
            <ul className={s.dialogsItems}>
                <DialigItem name="Yana" id="1"/>
                <DialigItem name="Olya" id="2"/>
                <DialigItem name="Vova" id="3"/>
                <DialigItem name="Alex" id="4"/>
                <DialigItem name="Zlata" id="5"/>
            </ul>
            <div className={s.messages}>
                <Message message="Hello"/>
                <Message message="Hi"/>
                <Message message="How are you?"/>
                <Message message="Yo"/>

            </div>


        </div>
    )
}
export default Dialogs;
