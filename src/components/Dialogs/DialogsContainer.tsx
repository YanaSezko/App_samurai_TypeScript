import React, { ChangeEvent } from "react";
import {
    sendMessageActionCreator, updateNewMessageBodyActionCreator
} from "../../redux/dialogs-reducer";
import { StoreType } from "../../redux/store";
import StoreContext from "../../StoreContext";
import Dialogs from "./Dialogs";
import dialogsReducer from './../../redux/dialogs-reducer';



type DialogsContainerType = {
    store: StoreType
}

const DialogsContainer = () => {

    return (
         <StoreContext.Consumer>
            {
            (store)=>{
                let state=store.getState()
                let onSendMessageClick = () => {
                    store.dispatch(sendMessageActionCreator())
                }
                let onNewMessageChange = (body: string) => {
                    store.dispatch(updateNewMessageBodyActionCreator(body))
                }

        return <Dialogs
       
                sendMessage={onSendMessageClick}
                updateNewMessageBody={onNewMessageChange}
               dialogPage={state.dialogPage}
                />
            }
        }
        </StoreContext.Consumer>
    )
}
export default DialogsContainer