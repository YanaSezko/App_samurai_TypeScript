import React from 'react'
import { connect } from "react-redux";
import Users from "./Users"


import { 
    followSuccess,
    unfollowSuccess, 
    setCurrentPage, 
    toggleFollowingProgress,
    getUsers} from './../../redux/users-reducer ';
import Preloader from '../common/Preloader';
import { RootStateType } from '../../redux/store';





type MapStatePropsType = {
   
    totalUsersCount: number
    isFetching: boolean
    pageSize: number
    currentPage: number
    //pageNumber:number
    users: any
   
}
type OwnPropsType = {
    title: string
}

export type MapDispatchPropsType = {
    
    getUsers: (currentPage: number, pageSize: number) => any
    unfollow: (userId:number) => void
    follow: (userId:number) => void
    setUsers:any
    setTotalUsersCount:any
    setCurrentPage:any
    toggleIsFetching:(isFetching:boolean)=>void 
    followingInProgress:any
}



type UsersPropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class UsersContainer extends React.Component<UsersPropsType>{

    componentDidMount() {
        this.props.getUsers(this.props.currentPage,this.props.pageSize)
    }
    onPageChanged = (pageNumber:number) => {
        this.props.getUsers(pageNumber,this.props.pageSize)
       /*  this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
       
        usersAPI.getUsers(pageNumber,this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            }) */

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
            followingInProgress={this.props.followingInProgress}
        />
        </>
    }
}

type StateProps = ReturnType<typeof mapStateToProps>;
//type DispatchProps = typeof mapDispatchToProps;

debugger
let mapStateToProps = (state:RootStateType) => ({
    
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress:state.usersPage.followingInProgress

   
})

export default connect(mapStateToProps,{
    acceptFollow: followSuccess,
    acceptUnfollow: unfollowSuccess,
    setCurrentPage,
  toggleFollowingProgress,
getUsers})(UsersContainer)