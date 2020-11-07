import { connect } from "react-redux";
import React from "react";
import { followAC, unfollowAC, UserType } from "../../redux/users-reducer ";
import { setUsersAC } from './../../redux/users-reducer ';
import Users from "./Users";
import { AppStateType } from "../../redux/redux-store";

type MapDispatchPropsType={
    follow:(userId:number)=>void
    unfollow:(userId:number)=>void
    setUsers:(users:Array<UserType>)=>void
}

let mapStateToProps = (state:AppStateType) => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps=(dispatch:any)=>{
return {
    follow:(userId:number)=>{
        dispatch(followAC(userId))
    },
    unfollow:(userId:number)=>{
        dispatch(unfollowAC(userId))
    },
    setUsers:(users:Array<UserType>)=>{
        dispatch(setUsersAC(users))
    }
}
}
export default connect(mapStateToProps, mapDispatchToProps)(Users)