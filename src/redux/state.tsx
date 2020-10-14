let rerenderEntireTree=(state:any)=>{
    console.log('state changed')
}
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
    newPostText:string
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
        ],
        newPostText:"текс сообщения"
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

export function addPost(){
    let newPost:PostType = {
        id:3,
        message:state.profilePage.newPostText
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText=''
    rerenderEntireTree(state)
}
export function updateNewPostText(newText:string){
    state.profilePage.newPostText=newText
    rerenderEntireTree(state)
}
export function subscribe(observer:any){
rerenderEntireTree=observer
}

export default state;