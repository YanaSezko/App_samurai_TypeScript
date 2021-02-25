import React from "react";
import Preloader from "../../common/Preloader";
import s from './ProfileInfo.module.css'
import logo from '../../../img/logo.png'
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

type ProfileInfoType = any

const ProfileInfo = ({ profile, status, updateStatus }: any) => {

    if (!profile) {
        return <Preloader />
    }
    return <>
       {/*  <img src="https://fs-thb01.getcourse.ru/fileservice/file/thumbnail/h/ed86cd6bb0e9a18bf2eb32c623fe698d.jpg/s/f1200x/a/1005/sc/394"
            alt="image" /> */}
        <section className={s.description}>
            <img src={profile.photos.large} alt="img" />
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        </section>
    </>
}
export default ProfileInfo;
