import React from 'react'
import { connect } from "react-redux";
import Users from "./Users"
import {
    follow,
    requestUsers,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress
} from './../../redux/users-reducer ';
import Preloader from '../common/Preloader';
import { RootStateType } from '../../redux/store';
import { compose } from 'redux';
import { getPageSize, getUsers, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from '../../redux/users-selectors';



type MapStatePropsType = {

    totalUsersCount: number
    isFetching: boolean
    pageSize: number
    currentPage: number
    pageNumber: number
    users: Array<any>

}
type OwnPropsType = {
    title: string
}

export type MapDispatchPropsType = {
    requestUsers: (currentPage: number, pageSize: number) => any
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    setUsers: any
    setTotalUsersCount: any
    setCurrentPage: any
    toggleIsFetching: (isFetching: boolean) => void
    followingInProgress: any
    getUsers: any
}
/* let mapStateToProps = (state: RootStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
 */
let mapStateToProps = (state: RootStateType) => {
    return {
        users: getUsers(state),

        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

type UsersPropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class UsersContainer extends React.Component<UsersPropsType>{

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}

            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}


export default compose(
    //withAuthRedirect,
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        getUsers,
        requestUsers
    })
)(UsersContainer)

