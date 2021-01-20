import React, { ChangeEvent } from "react";
import s from './Dialogs.module.css';
import DialigItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Redirect } from "react-router-dom";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { DialogPageType } from "../../redux/store";
import { Textarea } from "../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from './../../utils/validators/validators';



type DialogsType = {
    sendMessage: () => void
    //updateNewMessageBody: (body: string) => void
    dialogPage: DialogPageType
    isAuth: boolean
}

const Dialogs = (props: DialogsType) => {
    let state = props.dialogPage
    let dialogsElements = state.dialogs
        .map(d => <DialigItem name={d.name} key={d.id} id={d.id} />)
    let messagesElements = state.messages
        .map(m => <Message message={m.message} key={m.id} id={m.id} />)
    let newMessageBody = state.newMessageBody

    let addNewMessage = (values: FormDataType) => {
        //@ts-ignore
        props.sendMessage(values.newMessageBody)
    }

    if (!props.isAuth) return <Redirect to={"/login"} />

    return (
        <div className={s.dialogs}>
            <ul className={s.dialogsItems}>
                {dialogsElements}
            </ul>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <AddMessageFormRedux  onSubmit={addNewMessage}/>
        </div>
    )
}

type FormDataType ={
    newMessageBody:string
}

const maxLength50 = maxLengthCreator(50)

const AddMessageForm:React.FC<InjectedFormProps<FormDataType>> = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} 
                validate={[required,maxLength50]}
                name="newMessageBody"
                    placeholder="Enter your message"
                />
            </div>
            <div><button>send</button></div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm<FormDataType>({form:"dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;
