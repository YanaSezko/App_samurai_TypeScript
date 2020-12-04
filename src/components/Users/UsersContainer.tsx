import React from 'react'
import { connect } from "react-redux";
import axios from "axios"
import Users from "./Users"
import { AppStateType } from '../../redux/redux-store';

import { 
    toggleIsFetching,
    follow,
    unfollow, 
    setUsers, 
    setCurrentPage, 
    setTotalUsersCount } from './../../redux/users-reducer ';
import Preloader from '../common/Preloader';
import { RootStateType } from '../../redux/store';



type MapStatePropsType = {
    users: Array<any>
    totalUsersCount: number
    isFetching: boolean
    pageSize: number
    currentPage: number
    //pageNumber:number
    //followingInProgress: Array<number>
}
type OwnPropsType = {
    title: string
}

type MapDispatchPropsType = {
    getUsers: (currentPage: number, pageSize: number) => any
    unfollow: (userId:number) => void
    follow: (userId:number) => void
    setUsers:any
    setTotalUsersCount:any
    setCurrentPage:any
    toggleIsFetching:(isFetching:boolean)=>void
}


type UsersPropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class UsersContainer extends React.Component<UsersPropsType>{

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber:number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            })

    }

    render() {
        return <>
{this.props.isFetching?<Preloader/>:null}

        <Users totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            //getUsers={this.props.getUsers}
           // isFetching={this.props.isFetching}

        />
        </>
    }
}

type StateProps = ReturnType<typeof mapStateToProps>;
//type DispatchProps = typeof mapDispatchToProps;


let mapStateToProps = (state:RootStateType) => ({
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching

   
})
/* let mapDispatchToProps = (dispatch:any) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<any>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setUsersTotalCountAC(totalCount))
        },
        toggleIsFetching:(isFetching:boolean)=>{
            dispatch(toggleIsFetchingAC(isFetching))
        }

    }
} */

export default connect(mapStateToProps,{
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsFetching})(UsersContainer)