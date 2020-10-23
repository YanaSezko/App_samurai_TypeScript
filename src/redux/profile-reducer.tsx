import {ActionsType, PostType, ProfilePageType} from "./state";

export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextActionCreator>

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state:ProfilePageType, action:ActionsType) => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {
                id: 3,
                message: state.newPostText
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
        }
    }

export const addPostActionCreator = () =>
    ({type: ADD_POST} as const)

export const updateNewPostTextActionCreator = (text: string) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text} as const)


export default profileReducer