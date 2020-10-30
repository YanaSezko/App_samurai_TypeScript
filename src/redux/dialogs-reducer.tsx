import {ActionsType, DialogPageType} from "./store";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

export type SendMessageActionType = ReturnType<typeof sendMessageActionCreator>
export type UpdateNewMessageBodyActionType = ReturnType<typeof updateNewMessageBodyActionCreator>

let initialState={
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'How are you?'},
    ],
    dialogs: [
        {id: 1, name: 'Yana'},
        {id: 2, name: 'Olya'},
        {id: 3, name: 'Vova'},
        {id: 4, name: 'Alex'},
        {id: 5, name: 'Zlata'}
    ],
    newMessageBody: ""
}

const dialogsReducer=(state=initialState,action:ActionsType)=>{
    switch (action.type){
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.messages.push({id: 4, message: body})
            state.newMessageBody = ''
            return state
        default:
            return state
    }
}
export const sendMessageActionCreator = () =>
    ({type: SEND_MESSAGE} as const)
export const updateNewMessageBodyActionCreator = (body: string) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body} as const)

export default dialogsReducer

