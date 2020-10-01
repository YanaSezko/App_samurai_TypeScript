import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts: React.FC<any> = () => {
    return (
        <section className={s.myposts}>
            <h2>my posts</h2>
            <div>
                <textarea></textarea>
                <p><button>Add post</button></p>
            </div>
            <ul>
                <Post message="Hi, how are you?"/>
                <Post message="It's my first post"/>
            </ul>
        </section>
    )
}
export default MyPosts;
