import React from "react"
import { NavLink } from "react-router-dom"
import userPhoto from '../../img/logo.png'
import { UserType } from "../../redux/store"
import Paginator from "../common/Paginator/Paginator"
import styles from './Users.module.css'
import { unfollow } from './../../redux/users-reducer ';
import User from "./User"


type UsersPropsType = {
    followingInProgress: any
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void


}

let Users = ({ currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props }: UsersPropsType) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged} pageSize={pageSize} totalItemsCount={totalUsersCount} />
        <div>
            {users.map(u => <User user={u}
                key={u.id}
                followingInProgress={props.followingInProgress}
                unfollow={props.unfollow}
                follow={props.follow} />)}
        </div>
    </div>
}
export default Users;