import { ActionsType, PostType, ProfilePageType } from "./store";

export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextActionCreator>

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 1, message: "Hi, how are you?" },
        { id: 2, message: "It's my first post" },
    ],
    newPostText: "текс сообщения"
}

const profileReducer = (state = initialState, action: ActionsType) => {
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
        default:
            return state
    }
}

export const addPostActionCreator = () =>
    ({ type: ADD_POST } as const)

export const updateNewPostTextActionCreator = (text: string) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text } as const)


export default profileReducer