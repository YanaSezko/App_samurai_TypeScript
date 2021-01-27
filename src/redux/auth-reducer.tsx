import { authAPI } from "../api/api"

const SET_USER_DATA = 'SET_USER_DATA'

export type InitialStateType={
    userId: number|null,
    email: string|null,
    login: string|null,
    isAuth: boolean
}
export type AuthActionsType =
    | ReturnType<typeof setAuthUserData>


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}
export const authReducer = (state:InitialStateType= initialState, action: AuthActionsType) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state
    }
}

export const setAuthUserData = (userId: any, email: any, login: any,isAuth:boolean) =>
    ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } } as const)

//Thunk
export const getAuthUserData = () => (dispatch:any) => {
   authAPI.me()
   .then(response => {
        if (response.data.resultCode === 0){
            let{id, email , login}=response.data.data
           dispatch(setAuthUserData(id, email , login, true))
        }
            })

}

export const login = (email:any ,password:any ,rememberMe:boolean )=> (dispatch:any) => {
    authAPI.login(email,password,rememberMe)
    .then(response => {
         if (response.data.resultCode === 0){
            dispatch(getAuthUserData())
         }
             })
 
 }

 export const logout = ()=> (dispatch:any) => {
    authAPI.logout()
    .then(response => {
         if (response.data.resultCode === 0){
            dispatch(setAuthUserData(null, null , null, false))
         }
             })
 }


export default authReducer