import React, {FC} from "react";
import s from './Post.module.css'
import ava from "../../../../img/logo.png"
import {PostType} from "../../../../redux/store";

const Post = (props:PostType) => {
    return (
        <li className={s.item}>
            <img src={ava} alt="avatar"/>{props.message}</li>
    )
}
export default Post;
