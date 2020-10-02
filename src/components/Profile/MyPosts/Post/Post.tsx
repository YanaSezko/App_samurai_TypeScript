import React from "react";
import s from './Post.module.css'
import ava from "../../../../img/logo.png"
type postPropsType = {
    message: string
}

const Post: React.FC<postPropsType> = (props) => {
    return (
        <li className={s.item}>
            <img src={ava} alt="avatar"/>{props.message}</li>
    )
}
export default Post;
