import { Dispatch } from 'redux';
import { usersAPI } from '../api/api';
import { UserType } from './store';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'


export type UsersActionsType =
    | ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingProgress>

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
    fake: 10
}

export const usersReducer = (state = initialState, action: UsersActionsType) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u: any) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                /*  users:[...state.users]*/
                users: state.users.map((u: any) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }
        case SET_USERS:
            return { ...state, users: action.users }

        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.count }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state
    }
}

export const followSuccess = (userId: number) =>
    ({ type: FOLLOW, userId } as const)
export const unfollowSuccess = (userId: number) =>
    ({ type: UNFOLLOW, userId } as const)
export const setUsers = (users: Array<UserType>) =>
    ({ type: SET_USERS, users } as const)
export const setCurrentPage = (currentPage: number) =>
    ({ type: SET_CURRENT_PAGE, currentPage } as const)
export const setTotalUsersCount = (totalUsersCount: number) =>
    ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount } as const)
export const toggleIsFetching = (isFetching: boolean) =>
    ({ type: TOGGLE_IS_FETCHING, isFetching } as const)
export const toggleFollowingProgress = (isFetching: boolean, userId: number) =>
    ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId } as const)


export const requestUsers = (page: number, pageSize: number) => {
    return async (dispatch: any) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(page))

        let data = await usersAPI.getUsers(page, pageSize)
     
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))

    }
}

const followUnfollowFlow = async (dispatch:Dispatch, userId:number, apiMethod:any, actionCreator:any)=>{
    dispatch(toggleFollowingProgress(true, userId))
        let response = await apiMethod(userId);
        if (response.data.resultCode == 0) {
            dispatch(actionCreator(userId))
        }
        dispatch(toggleFollowingProgress(false, userId))
}

export const follow = (userId: number) => {
    return async (dispatch: any) => {
        followUnfollowFlow(dispatch,userId,usersAPI.follow.bind(usersAPI),followSuccess)

    }
}

export const unfollow = (userId: number) => {
    return async (dispatch: any) => {
        followUnfollowFlow(dispatch,userId,usersAPI.unfollow.bind(usersAPI),unfollowSuccess)

    }
}

export default usersReducer