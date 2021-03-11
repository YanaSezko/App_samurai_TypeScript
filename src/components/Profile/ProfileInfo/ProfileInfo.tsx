import React, { useState } from "react";
import Preloader from "../../common/Preloader";
import s from './ProfileInfo.module.css'
import logo from '../../../img/logo.png'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import { profileType } from "../../../redux/store";
import ProfileDataForm from "./ProfileDataForm";

type ProfileInfoType = {
    isOwner: boolean
    profile: profileType
    status: string
    updateStatus: any
    savePhoto: any
    saveProfile: any
}

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }: ProfileInfoType) => {
    let [editMode, setEditMode] = useState(false)

    const onSubmit = (formData: any) => {
        saveProfile(formData).then(() => {
            setEditMode(false)
        })

    }
    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e: any) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }
    return <div>
        <div className={s.description}>
            <img src={profile.photos.large || logo} alt="img" />
            {isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}

            {editMode
                //@ts-ignore
                ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
                : <ProfileData goToEditMode={() => { setEditMode(true) }} profile={profile} isOwner={isOwner} />
            }

            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        </div>
    </div>

}

const ProfileData = ({ profile, isOwner, goToEditMode }: any) => {
    return (
        <div className={s.profileData}>
            {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
            <div> <span>Full name</span>:{profile.fullName}</div>
            <div> <span>Looking for a job</span>:{profile.lookingForAJob ? "yes" : "no"}</div>
            <div> <span>My professional skills</span>:{profile.lookingForAJobDescription}</div>
            <div><span>Contacts</span>:{Object.keys(profile.contacts).map((key: any) => {
                return <Contact  contactTitle={key} contactValue={profile.contacts[key]} />
            })}</div>
        </div>
    )

}


const Contact = ({ contactTitle, contactValue }: any) => {
    return <div  className={s.contact}><b>{contactTitle}</b>:{contactValue}</div>
}

export default ProfileInfo;
