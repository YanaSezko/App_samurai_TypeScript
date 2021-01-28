import profileReducer, { ProfileActionsType } from "./profile-reducer";
import dialogsReducer, { DialogsActionsType } from "./dialogs-reducer";
import usersReducer, { UsersActionsType } from "./users-reducer ";
import authReducer from "./auth-reducer";

type ActionsType = UsersActionsType & DialogsActionsType
    & ProfileActionsType

export type StoreType = {
    _state: RootStateType
    _rerenderEntireTree: (_state: RootStateType) => void
    getState: () => RootStateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsType) => void
}

export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "Hi, how are you?" },
                { id: 2, message: "It's my first post" },
            ],
            newPostText: "текс сообщения",
            profile: {},
            status: ""
        },
        dialogPage: {
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
        },
        usersPage: {
            items: [
                {
                    "name": "Shubert",
                    "id": 1,
                    "photos": {
                        "small": null,
                        "large": null
                    },
                    "status": null,
                    "followed": false}
            ],
            "totalCount": 30,
            "error": null
        },
        auth: {
            isAuth: false
        },
        app: {}
    },
    _rerenderEntireTree() {
        store.getState()
        console.log('state changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer
    },

    dispatch(action) {
        store._state.profilePage = profileReducer(store._state.profilePage, action)
        //@ts-ignore
        store._state.dialogPage = dialogsReducer(store._state.dialogPage, action)
        store._state.usersPage = usersReducer(store._state.usersPage, action)
        //@ts-ignore
        store._state.auth = authReducer(store._state.auth, action)

        store._rerenderEntireTree(store._state)
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
export type UserType = any


export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
    profile: any
    status: string
}
export type DialogPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
    newMessageBody: string
}
export type AuthPageType = any

export type UsersPageType = any

export type RootStateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
    usersPage: UsersPageType
    auth: AuthPageType
    app: any
}

export default store;
