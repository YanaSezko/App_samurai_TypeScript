import { stopSubmit } from "redux-form";
import { profileAPI, usersAPI } from "../api/api";
import getState, { PostType } from "./store";




export type ProfileActionsType =
    | ReturnType<typeof addPostActionCreator>
    //| ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof savePhotoSuccess>

const ADD_POST = 'ADD-POST';
//const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'

let initialState = {
    posts: [
        { id: 1, message: "Hi, how are you?" },
        { id: 2, message: "It's my first post" }
    ],
    newPostText: "текс сообщения",
    profile: null,
    status: ""
}
type initialStateType = {
    posts: any
    newPostText: string
    profile: any
    status: string
}

export const profileReducer = (state: initialStateType = initialState, action: ProfileActionsType): initialStateType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: PostType = {
                id: 3,
                message: action.newPostText
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {
                    ...state.profile,
                    photos: action.photos
                }
            };
        }

        default:
            return state
    }
}
//actionCreator
export const addPostActionCreator = (newPostText: string) =>
    ({ type: ADD_POST, newPostText } as const)
/* export const updateNewPostTextActionCreator = (text: string) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text } as const) */
export const setUserProfile = (profile: any) =>
    ({ type: SET_USER_PROFILE, profile } as const)
export const setStatus = (status: string) =>
    ({ type: SET_STATUS, status } as const)
export const savePhotoSuccess = (photos: any) =>
    ({ type: SAVE_PHOTO_SUCCESS, photos } as const)

//thunkCreator    
export const getUserProfile = (userId: any) => async (dispatch: any) => {
    let response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}
export const getStatus = (userId: any) => async (dispatch: any) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))

}
export const updateStatus = (status: string) => async (dispatch: any) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}
export const savePhoto = (file: any) => async (dispatch: any) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export const saveProfile = (profile: any) => async ( dispatch:any, getState:any)=> {
    const userId = getState().auth.userId
    let response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        dispatch(stopSubmit("edit-profile", { _error: response.data.messages[0] }))//{"contacts":{"facebook":response.data.messages[0]}}
        return Promise.reject(response.data.messages[0])
    }
}

export default profileReducer