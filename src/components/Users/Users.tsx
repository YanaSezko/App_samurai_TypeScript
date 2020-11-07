import React from "react";
import { UserType } from "../../redux/users-reducer ";
import photo from "../../img/logo.png"

type UsersPropsType = {
    users: UserType[]
}

let Users = (props: UsersPropsType) => {
if (props.users.length===0){
    props.setUsers([
        { id: 1, photoUrl:'', followed: false, fullName: "Yana", status: "hi", location: { city: "Minsk", country: "Belarus" } },
        { id: 2, photoUrl:'', followed: true, fullName: "Olya", status: "yo", location: { city: "Kiev", country: "Ucraine" } },
        { id: 3, photoUrl:'', followed: false, fullName: "Zlata", status: "hello", location: { city: "Moscow", country: "Russia" } },
    
    ])
}
    return <ul>
        {props.users.map((u: UserType) =>
            <li key={u.id}>
                <p>
                    <div>
                        <img src={photo}>фото</img>
                    </div>
                    <div>
                        {/* {u.followed
                        ?<button onClick={()=>{props.unfollow(u.id)}}>UnFollow</button>
                        :<button onClick={()=>{props.follow(u.id)}}>Follow</button>} */}
                        
                    </div>
                </p>
                <p>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </p>
            </li>)
        }
    </ul>
}
export default Users