import React from 'react'
import { reduxForm } from 'redux-form'
import s from './ProfileInfo.module.css'
import { createField, Input, Textarea } from '../../common/FormsControls/FormsControls'
import style from '../../common/FormsControls/FormsControls.module.css'

const ProfileDataForm = ({ handleSubmit, profile, error }: any) => {
    return <div>
        <form onSubmit={handleSubmit}>
            <div><button>save</button></div>
            {error && <div className={style.formSummaryError}>
                {error}
            </div>}
            <div><b>Full name</b>:{createField("Full name", "fullName", {}, Input)}</div>
            <div> <b>Looking for a job</b>:{createField("", "Looking for a job", [], Input, { type: "checkbox" })}</div>
            <div> <b>My professional skills</b>:{createField("My professional skills", "LookingForAJobDescription", [], Textarea)}</div>
            <div> <b>About me</b>:
            {createField("About me", "aboutMe", [], Textarea)}</div>
            <div> <b>Contacts</b>:{Object.keys(profile.contacts).map((key: any) => {
                return <div className={s.contact} key={key}>
                    <b>{key}:{createField(key, "contacts." + key, {}, Input)}</b>
                </div>
            })}</div>
        </form>
    </div>
}

const ProfileDataReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm)

export default ProfileDataReduxForm;