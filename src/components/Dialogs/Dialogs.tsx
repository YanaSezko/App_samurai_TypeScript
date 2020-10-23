import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import DialigItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageActionCreator,updateNewMessageBodyActionCreator
} from "../../redux/dialogs-reducer";
import {StoreType} from "../../redux/state";

const Dialogs: React.FC<{store:StoreType}> = (props) => {
let state=props.store.getState().dialogPage

    let dialogsElements = state.dialogs
        .map(d => <DialigItem name={d.name} id={d.id}/>)
    let messagesElements = state.messages
        .map(m => <Message message={m.message} id={m.id}/>)
    let newMessagesBody = state.newMessageBody

    let onSendMessageClick=()=>{
        props.store.dispatch(sendMessageActionCreator())
    }
let onNewMessageChange=(e:ChangeEvent<HTMLTextAreaElement>)=>{
        let body=e.target.value
    props.store.dispatch(updateNewMessageBodyActionCreator(body))
}

    return (
        <div className={s.dialogs}>
            <ul className={s.dialogsItems}>
                {dialogsElements}
            </ul>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <div><textarea value={newMessagesBody}
                               onChange={onNewMessageChange}
                               placeholder='Enter your message'></textarea></div>
                <div><button onClick={onSendMessageClick}>send</button></div>
            </div>
        </div>
    )
}
export default Dialogs;
