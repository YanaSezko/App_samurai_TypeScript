import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsType, ProfilePageType} from "../../redux/state";

type ProfileType={
    profilePage:ProfilePageType
    dispatch:(action: ActionsType)=>void
}

const Profile= (props:ProfileType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts} dispatch={props.dispatch}/>
        </div>
    )
}
export default Profile;
