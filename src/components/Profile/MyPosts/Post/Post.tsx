import React from "react";
import s from './Post.module.css'
import ava from "../../../../img/logo.png"


type PostType = {
    id: number
    message: string
}

const Post = (props: PostType) => {
    return (
        <li className={s.item}>
            <img src={ava} alt="avatar"/>{props.message}</li>
    )
}
export default Post;
