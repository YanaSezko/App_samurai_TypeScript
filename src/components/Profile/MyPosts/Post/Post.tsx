import React from "react";
import s from './Post.module.css'

type postPropsType = {
    message: string
}

const Post = (props:postPropsType) => {
    return (
        <li className={s.item}>
            <img src="https://cdn.icon-icons.com/icons2/2121/PNG/512/avatar_woman_female_girl_people_icon_131282.png"
                 alt="avatar"/>{props.message}</li>
    )
}
export default Post;
