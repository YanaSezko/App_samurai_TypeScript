import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts: React.FC<any> = () => {
    let posts = [
        {id:1, message:"Hi, how are you?"},
        {id:2, message:"It's my first post"},
    ]
    let postsElements = posts.map(p=><Post message={p.message}/>)

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
