
export type DialogsActionsType =
| ReturnType<typeof sendMessageActionCreator>
| ReturnType<typeof updateNewMessageBodyActionCreator>



const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

export type SendMessageActionType = ReturnType<typeof sendMessageActionCreator>
export type UpdateNewMessageBodyActionType = ReturnType<typeof updateNewMessageBodyActionCreator>

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
    ],
    newMessageBody: ""
}

export const dialogsReducer = (state = initialState, action: DialogsActionsType) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return{
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            let body = state.newMessageBody
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages,{ id: 4, message: body }]
            }
        default:
            return state
    }
}
export const sendMessageActionCreator = () =>
    ({ type: SEND_MESSAGE } as const)
export const updateNewMessageBodyActionCreator = (body: string) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body } as const)

export default dialogsReducer

