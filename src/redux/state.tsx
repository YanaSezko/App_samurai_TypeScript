import {rerenderEntireTree} from "../render";

export type MessageType={
    id:number
    message:string
}
export type DialogType={
    id:number
    name:string
}
export type PostType={
    id: number
    message:string
}
export type ProfilePageType={
    posts:Array<PostType>
}
export type DialogPageType={
    messages:Array<MessageType>
    dialogs:Array<DialogType>
}
export type RootStateType={
    profilePage:ProfilePageType
    dialogPage:DialogPageType
}

let state:RootStateType = {
    profilePage:{
        posts:[
            {id:1, message:"Hi, how are you?"},
            {id:2, message:"It's my first post"},
        ]
    },
    dialogPage:{
        messages:[
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Hello'},
            {id: 3, message: 'How are you?'},
        ],
        dialogs:[
            {id: 1, name: 'Yana'},
            {id: 2, name: 'Olya'},
            {id: 3, name: 'Vova'},
            {id: 4, name: 'Alex'},
            {id: 5, name: 'Zlata'}
        ]
    }
}

export function addPost(postMessage:string){
    let newPost={
        id:3,
        message:postMessage
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
}

export default state;