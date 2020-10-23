import profileReducer, {AddPostActionType, UpdateNewPostTextActionType} from "./profile-reducer";
import dialogsReducer, {SendMessageActionType, UpdateNewMessageBodyActionType} from "./dialogs-reducer";

export type StoreType = {
    _state: RootStateType
    _rerenderEntireTree: (_state: RootStateType) => void
    getState: () => RootStateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsType) => void
}
export type ActionsType =
    AddPostActionType
    | UpdateNewPostTextActionType
    | SendMessageActionType
    | UpdateNewMessageBodyActionType

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?"},
                {id: 2, message: "It's my first post"},
            ],
            newPostText: "текс сообщения"
        },
        dialogPage: {
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
    },
    _rerenderEntireTree() {
        console.log('state changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action)

        this._rerenderEntireTree(this._state)
    }

}
export type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name: string
}
export type PostType = {
    id: number
    message: string
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type DialogPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
    newMessageBody: string
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
}



export default store;
