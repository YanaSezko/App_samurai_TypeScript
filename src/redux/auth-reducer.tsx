import { stopSubmit } from "redux-form"
import { authAPI } from "../api/api"


const SET_USER_DATA = '/auth/SET_USER_DATA'

export type InitialStateType = {
    userId: number | null,
    email: string | null,
    login: string | null,
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
export const authReducer = (state: InitialStateType = initialState, action: AuthActionsType) => {
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

export const setAuthUserData = (userId:any, email:any, login:any, isAuth:any) =>
    ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } } as const)

//Thunk
export const getAuthUserData = () => async (dispatch: any) => {

    let response = await authAPI.me()
    if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (email: any, password: any, rememberMe: boolean) => async (dispatch: any) => {
    let response = await authAPI.login(email, password, rememberMe)

    if (response.data.resultCode === 0) {
      
        dispatch(getAuthUserData())
    } else {

        let message = response.data.messages.length > 0 ? response.data.messages[0] : "some error"
        debugger
        dispatch(stopSubmit("login", { _error: message }))
    }

}

export const logout = () => async (dispatch: any) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}


export default authReducer