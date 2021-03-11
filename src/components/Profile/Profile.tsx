import React from "react";
import s from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type ProfilePropsType = {
    isOwner: boolean
    profile: any
    status: string
    updateStatus: any
    savePhoto: any
    saveProfile: any
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo
                isOwner={props.isOwner}
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
                savePhoto={props.savePhoto} 
                saveProfile={props.saveProfile}
                />
            
            <MyPostsContainer />
        </div>
    )
}
export default Profile;
