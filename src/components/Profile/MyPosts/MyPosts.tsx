import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {ActionsType, PostType} from "../../../redux/store";

type MyPostType = {
    updateNewPostText:(text:string)=>void
    addPost:()=>void
    posts: PostType[]
    newPostText: string

}

const MyPosts = (props:MyPostType) => {

    let postsElements = props.posts.map(p => <Post id={p.id} message={p.message}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    function onAddPost() {
        props.addPost()
    }

    function onPostChange() {
        if(newPostElement.current){
            let text = newPostElement.current.value
            props.updateNewPostText(text)
        }
    }
// newPostElement.current?.value
    return (
        <section className={s.myposts}>
            <h2>my posts</h2>
            <div>
                <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
                <p>
                    <button onClick={onAddPost}>Add post</button>
                </p>
            </div>
            <ul>
                {postsElements}
            </ul>
        </section>
    )
}
export default MyPosts;
