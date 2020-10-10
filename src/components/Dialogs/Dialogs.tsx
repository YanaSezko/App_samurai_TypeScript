import React from "react";
import s from './Dialogs.module.css';
import DialigItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogPageType} from "../../redux/state";

const Dialogs: React.FC<{state:DialogPageType}> = (props) => {

    let dialogsElements = props.state.dialogs
        .map(d => <DialigItem name={d.name} id={d.id}/>)

    let messagesElements = props.state.messages
        .map(m => <Message message={m.message} id={m.id}/>)


    return (
        <div className={s.dialogs}>
            <ul className={s.dialogsItems}>
                {dialogsElements}
            </ul>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}
export default Dialogs;
