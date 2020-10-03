import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostType, ProfilePageType} from "../../../redux/state";

type myPostsType={
    // posts:PostType
    state:ProfilePageType
}

const MyPosts = (props:myPostsType) => {

    let postsElements = props.state.posts.map(p => <Post id={p.id} message={p.message}/>)

    return (
        <section className={s.myposts}>
            <h2>my posts</h2>
            <div>
                <textarea>Текст поста</textarea>
                <p><button>Add post</button></p>
            </div>
            <ul>
                {postsElements}
            </ul>
        </section>
    )
}
export default MyPosts;
