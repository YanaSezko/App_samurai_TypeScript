import { createSelector } from "reselect"
import { RootStateType, UserType } from "./store"

const getUsersSelector = (state:RootStateType)=>{
    debugger
    return state.usersPage.users;
}
export const getUsers = createSelector(getUsersSelector,
    (users:Array<UserType>)=>{
        return users.filter((u:UserType) => true);
    })

export const getPageSize = (state: any) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state: any) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state: any) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state: any) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state: any) => {
    return state.usersPage.followingInProgress
}




