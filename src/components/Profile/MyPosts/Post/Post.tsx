import React from "react";
import s from './Post.module.css'

type postPropsType = {
    message: string
}

const Post: React.FC<postPropsType> = (props) => {
    return (
        <li className={s.item}>
            <img src="https://cdn.icon-icons.com/icons2/1698/PNG/256/60instagramhighlighticons117_112130.png"
                 alt="avatar"/>{props.message}</li>
    )
}
export default Post;
