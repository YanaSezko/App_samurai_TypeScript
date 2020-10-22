import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {ActionsType, addPostActionCreator, PostType, updateNewPostTextActionCreator} from "../../../redux/state";

type MyPostType = {
    posts: PostType[]
    dispatch:(action: ActionsType) => void

}


const MyPosts= (props:MyPostType) => {

    let postsElements = props.posts.map(p => <Post id={p.id} message={p.message}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    function addPost() {
        props.dispatch(addPostActionCreator())
    }

    function onPostChange() {
        if(newPostElement.current){
            let text = newPostElement.current.value
            let action=updateNewPostTextActionCreator(text)
            props.dispatch(action)
        }
    }
// newPostElement.current?.value
    return (
        <section className={s.myposts}>
            <h2>my posts</h2>
            <div>
                <textarea ref={newPostElement} onChange={onPostChange} />
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
