const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

export type StoreType = {
    _state: RootStateType
    _rerenderEntireTree: (_state: RootStateType) => void
    getState: () => RootStateType
    subscribe: (observer: () => void) => void
    dispatch: (action:ActionsType) => void
}
export type ActionsType = AddPostActionType|UpdateNewPostTextActionType

type AddPostActionType=ReturnType<typeof addPostActionCreator>
type UpdateNewPostTextActionType=ReturnType<typeof updateNewPostTextActionCreator>


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
            ]
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
        if (action.type === ADD_POST) {
            let newPost: PostType = {
                id: 3,
                message: this._state.profilePage.newPostText
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._rerenderEntireTree(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._rerenderEntireTree(this._state)
        }

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
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
}

export const addPostActionCreator= () =>
    ({type: ADD_POST} as const)

export const updateNewPostTextActionCreator = (text:string) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text}as const)


export default store;
