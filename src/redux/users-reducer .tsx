export type FollowtActionType = ReturnType<typeof followAC>
export type UnfollowActionType = ReturnType<typeof unfollowAC>

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

type ActionsType = FollowActionTyepe | UnFollowActionTyepe | SetUsersActionTyepe

export type FollowActionTyepe = {
    type: typeof FOLLOW
    userId: number
}
export type UnFollowActionTyepe = {
    type: typeof UNFOLLOW
    userId: number
}
export type SetUsersActionTyepe = {
    type: typeof SET_USERS
    users: Array<UserType>
}

export type UserType = {
    id: number
    photoUrl:string
    followed: boolean
    fullName: string
    status: string
    location: { city: string, country: string }
}

let initialState = {
    users: [ ]
}

const usersReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
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
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: {...state, ...action.users}
            }
        default:
            return state
    }
}

export const followAC = (userId: number) =>
    ({ type: FOLLOW, userId } as const)

export const unfollowAC = (userId: number) =>
    ({ type: UNFOLLOW, userId } as const)

export const setUsersAC = (users: any) =>
    ({ type: SET_USERS, users } as const)



export default usersReducer