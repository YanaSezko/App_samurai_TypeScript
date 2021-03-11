import profileReducer, { ProfileActionsType } from "./profile-reducer";
import dialogsReducer, { DialogsActionsType } from "./dialogs-reducer";
import usersReducer, { UsersActionsType } from "./users-reducer ";

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
                { id: 2, message: "It's my first post" }
            ],
            newPostText: "текс сообщения",
            profile: {
                userId: 6377,
                lookingForAJob: "yes",
                lookingForAJobDescription: "",
                fullName: "",
                contacts: {
                    github: "",
                    vk: "",
                    facebook: "",
                    instagram: "",
                    twitter: "",
                    website: "",
                    youtube: "",
                    mainLink: ""
                },
                photos: {
                    small: "",
                    large: ""
                }
            },
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
            users: [],
            pageSize: 10,
            totalUsersCount: 0,
            currentPage: 1,
            isFetching: true,
            followingInProgress: [],
            fake: 10
        },
        auth: {
            userId: 6377,
            email: '',
            login: '',
            logout: '',
            isAuth: false,
            captchaUrl: null
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
        store._state.dialogPage = dialogsReducer(store._state.dialogPage, action)
        store._state.usersPage = usersReducer(store._state.usersPage, action)
        //     store._state.auth = authReducer(store._state.auth, action)

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
export type UserType = {
    name: string
    id: number
    photos: any
    status: null
    followed: false
}

export type profileType = {
    userId: number
    lookingForAJob: string
    lookingForAJobDescription: string
    fullName: string
    contacts: profileContactsType
    photos: photosType
}
type profileContactsType = any/* {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
} */
type photosType = {
    small: string
    large: string
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
    profile: profileType
    status: string
}
export type DialogPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
    newMessageBody: string

}
export type AuthPageType = {
    userId: number
    email: string
    login: string
    logout: string
    isAuth: boolean
    captchaUrl: string|null
}

export type UsersPageType = {
    users: any
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: any
    fake: number
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
    usersPage: UsersPageType
    auth: AuthPageType
    app: any
}

export default store;
