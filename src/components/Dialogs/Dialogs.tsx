import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import DialigItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { DialogPageType, DialogType, MessageType, RootStateType } from "../../redux/store";



type DialogsType={
    sendMessage:()=>void
    updateNewMessageBody:(body:string)=>void
    dialogPage:DialogPageType
}

const Dialogs = (props:DialogsType) => {
    let dialogsElements =props.dialogPage.dialogs
    .map(d => <DialigItem name={d.name} id={d.id}/>)
    let messagesElements = props.dialogPage.messages
    .map(m => <Message message={m.message} id={m.id}/>)
    let newMessagesBody = props.dialogPage.newMessageBody

    let onSendMessageClick=()=>{
        props.sendMessage()
    }
let onNewMessageChange=(e:ChangeEvent<HTMLTextAreaElement>)=>{
        let body=e.target.value
        props.updateNewMessageBody(body)
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
