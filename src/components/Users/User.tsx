import React from "react"
import { NavLink } from "react-router-dom"
import userPhoto from '../../img/logo.png'
import { UserType } from "../../redux/store"
import Paginator from "../common/Paginator/Paginator"
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

let User = ({user,followingInProgress,unfollow,follow}:any) => {
      return <div>
            <div>
                <div>
                    <NavLink to={"/profile/" + user.id}>
                        <img className={styles.userPhoto} src={user.photos.small != null ? user.photos.small : userPhoto} />
                    </NavLink>
                </div>
                <div>

                    {user.followed
                        ? <button disabled={followingInProgress
                            .some((id:number) => id === user.id)} 
                            onClick={() => {unfollow(user.id)}}>
                                UnFollow</button>
                        
                        : <button disabled={followingInProgress
                            .some((id:number) => id === user.id)} 
                        onClick={() => {follow(user.id)}}>
                                Follow</button>}

                </div>
            </div>
            <div>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{"user.location.country"}</div>
                    <div>{"user.location.city"}</div>
                </span>
            </div>
        </div>
}
export default User;