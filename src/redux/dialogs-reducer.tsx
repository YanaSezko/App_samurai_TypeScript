import { AnyCnameRecord } from "dns";

export type DialogsActionsType =
| ReturnType<typeof sendMessageActionCreator>

const SEND_MESSAGE = 'SEND-MESSAGE';

export type SendMessageActionType = ReturnType<typeof sendMessageActionCreator>


let initialState = {
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Hello' },
        { id: 3, message: 'How are you?' },
    ],
    dialogs: [
        { id: 1, name: 'Yana' },
        { id: 2, name: 'Olya' },
        { id: 3, name: 'Vova' },
        { id: 4, name: 'Alex' },
        { id: 5, name: 'Zlata' }
    ]
}

export const dialogsReducer = (state = initialState, action: DialogsActionsType) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages,{ id: 4, message: body }]
            }
        default:
            return state
    }
}

export const sendMessageActionCreator = (newMessageBody:string) =>
    ({ type: SEND_MESSAGE, newMessageBody } as const)

export default dialogsReducer

