import React, { ChangeEvent } from "react";
import s from './Dialogs.module.css';
import DialigItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { DialogPageType, DialogType, MessageType, RootStateType } from "../../redux/store";
import { Redirect } from "react-router-dom";



type DialogsType = {
    sendMessage: () => void
    updateNewMessageBody: (body: string) => void
    dialogPage: DialogPageType
    isAuth:boolean
}

const Dialogs = (props: DialogsType) => {
    let state = props.dialogPage
    let dialogsElements = state.dialogs
        .map(d => <DialigItem name={d.name} key={d.id} id={d.id} />)
    let messagesElements = state.messages
        .map(m => <Message message={m.message} key={m.id} id={m.id} />)
    let newMessagesBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.sendMessage()
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
    }

   if (!props.isAuth) return <Redirect to={"/login"}/>

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
