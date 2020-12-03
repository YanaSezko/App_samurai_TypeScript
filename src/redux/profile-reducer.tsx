import { PostType } from "./store";


export type ProfileActionsType =
| ReturnType<typeof addPostActionCreator>
| ReturnType<typeof updateNewPostTextActionCreator>
| ReturnType<typeof setUserProfile>


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

/* export type InitialStateType={
    posts:Array<any>
    newPostText: string
    profile:any
 }
 */

let initialState = {
    posts: [
        { id: 1, message: "Hi, how are you?" },
        { id: 2, message: "It's my first post" }
    ],
    newPostText: "текс сообщения",
    profile: null
}

export const profileReducer = (state = initialState, action: ProfileActionsType) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: PostType = {
                id: 3,
                message: state.newPostText
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE:{
            return{
                ...state,
                profile:action.profile
            }
        }
        default:
            return state
    }
}

export const addPostActionCreator = () =>
    ({ type: ADD_POST } as const)

export const updateNewPostTextActionCreator = (text: string) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text } as const)

export const setUserProfile = (profile:any) =>
    ({ type: SET_USER_PROFILE, profile } as const)



export default profileReducer