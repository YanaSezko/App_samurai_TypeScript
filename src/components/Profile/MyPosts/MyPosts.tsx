import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts: React.FC<any> = () => {
    let postsData = [
        {id:1, message:"Hi, how are you?"},
        {id:2, message:"It's my first post"},
    ]
    return (
        <section className={s.myposts}>
            <h2>my posts</h2>
            <div>
                <textarea></textarea>
                <p><button>Add post</button></p>
            </div>
            <ul>
                <Post message={postsData[0].message}/>
                <Post message={postsData[1].message}/>
            </ul>
        </section>
    )
}
export default MyPosts;
