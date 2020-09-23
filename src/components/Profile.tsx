import React from "react";
import s from './Profile.module.css'

const Profile=()=>{
    return(
        <main className={s.content}>
            <img src="https://fs-thb01.getcourse.ru/fileservice/file/thumbnail/h/ed86cd6bb0e9a18bf2eb32c623fe698d.jpg/s/f1200x/a/1005/sc/394" alt="image"/>
            <section>ava+description</section>
            <section> my posts
                <p>new post</p>
                <ul>
                    <li>post1</li>
                    <li>post2</li>
                    <li>post3</li>
                </ul>
            </section>
        </main>
    )
}
export default Profile;
