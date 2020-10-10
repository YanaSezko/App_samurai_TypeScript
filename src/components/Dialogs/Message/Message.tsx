import React from "react";
import s from './../Dialogs.module.css';
import {MessageType} from "../../../redux/state";

const Message:React.FC<MessageType> = (props) => {
    return <div className={s.message}>{props.message}</div>
}

export default Message;
