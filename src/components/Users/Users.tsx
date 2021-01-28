import React from "react"
import { NavLink } from "react-router-dom"
import userPhoto from '../../img/logo.png'
import { UserType } from "../../redux/store"
import styles from './Users.module.css'

type UsersPropsType = {
    followingInProgress:any
    pageSize:number
    totalUsersCount:number
    currentPage:number
    onPageChanged:(pageNumber: number) => void
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
   

}

let Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
     return <div>
        <div>
            {pages.map(p => {
                //@ts-ignore
                return <span className={ props.currentPage === p && styles.selected }
                    onClick={(e) => {
                        props.onPageChanged(p);
                    }}>{p}</span>
            })}
        </div>
        {props.users.map(u => <div key={u.id}>
            <div>
                <div>
                    <NavLink to={"/profile/" + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} />
                    </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button disabled={props.followingInProgress
                            .some((id:number) => id === u.id)} 
                            onClick={() => {props.unfollow(u.id)}}>
                                UnFollow</button>
                        //@ts-ignore
                        : <button disabled={props.followingInProgress
                            .some((id:number) => id === u.id)} 
                        onClick={() => {props.follow(u.id)}}>
                                Follow</button>}

                </div>
            </div>
            <div>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>
            </div>
        </div>)
        }

    </div>
}
export default Users;