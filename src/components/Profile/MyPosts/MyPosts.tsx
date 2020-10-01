import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts: React.FC<any> = () => {
    return (
        <section> my posts
            <p>new post</p>
            <ul>
                <Post message="Hi, how are you?"/>
                <Post message="It's my first post"/>

            </ul>
        </section>
    )
}
export default MyPosts;
