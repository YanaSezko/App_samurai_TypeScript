import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {ProfilePageType} from "../../../redux/state";

const MyPosts: React.FC<ProfilePageType> = (props) => {

    let postsElements= props.posts.map(p => <Post id={p.id} message={p.message}/>)

    let newPostElement: React.RefObject<any>=React.createRef();

    function addPost(){
       let text=newPostElement.current.value;
       alert(text)
    }

    return (
        <section className={s.myposts}>
            <h2>my posts</h2>
            <div>
                <textarea ref={newPostElement}>Текст поста</textarea>
                <p><button onClick={addPost}>Add post</button></p>
            </div>
            <ul>
                {postsElements}
            </ul>
        </section>
    )
}
export default MyPosts;
