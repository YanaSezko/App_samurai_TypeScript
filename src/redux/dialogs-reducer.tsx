import {ActionsType, DialogPageType} from "./state";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

export type SendMessageActionType = ReturnType<typeof sendMessageActionCreator>
export type UpdateNewMessageBodyActionType = ReturnType<typeof updateNewMessageBodyActionCreator>


const dialogsReducer=(state:DialogPageType,action:ActionsType)=>{
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

