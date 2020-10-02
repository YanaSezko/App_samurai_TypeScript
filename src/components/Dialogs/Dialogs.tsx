import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DilogType = {
    name: string
    id: number
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

const Dialogs: React.FC<any> = (props) => {
    let dialogsData = [
        {id:1, name:'Yana'},
        {id:2, name:'Olya'},
        {id:3, name:'Vova'},
        {id:4, name:'Alex'},
        {id:5, name:'Zlata'}
        ]
    let messagesData = [
        {id:1, message:'Hi'},
        {id:2, message:'Hello'},
        {id:3, message:'How are you?'},
    ]
    return (
        <div className={s.dialogs}>
            <ul className={s.dialogsItems}>
                <DialigItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialigItem name={dialogsData[1].name} id={dialogsData[1].id}/>

            </ul>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>


            </div>


        </div>
    )
}
export default Dialogs;
