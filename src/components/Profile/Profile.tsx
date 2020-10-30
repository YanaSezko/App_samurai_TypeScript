import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsType, ProfilePageType, StoreType} from "../../redux/store";
import MyPostsContainer from './MyPosts/MyPostsContainer';
/* 
type ProfileType={
    store:StoreType
} */

const Profile= (props:any) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    )
}
export default Profile;
