import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";

type MyPostType = {
    posts: PostType[]
    addPost: () => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

const MyPosts: React.FC<MyPostType> = (props) => {

    let postsElements = props.posts.map(p => <Post id={p.id} message={p.message}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    function addPost() {
        props.addPost()
    }

    function onPostChange() {
        if(newPostElement.current){
            let text = newPostElement.current.value
            props.updateNewPostText(text)
        }
    }
//newPostElement.current?.value
    return (
        <section className={s.myposts}>
            <h2>my posts</h2>
            <div>
                <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
                <p>
                    <button onClick={addPost}>Add post</button>
                </p>
            </div>
            <ul>
                {postsElements}
            </ul>
        </section>
    )
}
export default MyPosts;
