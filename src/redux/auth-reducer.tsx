import { authAPI } from "../api/api"

const SET_USER_DATA = 'SET_USER_DATA'

/* 
export type UsersActionsType =
| ReturnType<typeof follow>
| ReturnType<typeof unfollow>
| ReturnType<typeof setUsers>
| ReturnType<typeof setCurrentPage>
| ReturnType<typeof setTotalUsersCount>
| ReturnType<typeof toggleIsFetching>
 */
/* 
export type InitialStateType={
    users:Array<any>
    pageSize: number
    totalUsersCount:number
    currentPage:number
    isFetching: boolean
} */
export type AuthActionsType =
    | ReturnType<typeof setAuthUserData>


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}
export const authReducer = (state: any = initialState, action: AuthActionsType) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default:
            return state
    }
}

export const setAuthUserData = (userId: number, email: string, login: string) =>
    ({ type: SET_USER_DATA, data: { userId, email, login } } as const)


export const getAuthUserData = () => (dispatch:any) => {
   authAPI.me()
   .then(response => {
        if (response.data.resultCode === 0){
            let{id, email , login}=response.data.data
           dispatch(setAuthUserData(id, email , login))
        }
            })

}
export default authReducer