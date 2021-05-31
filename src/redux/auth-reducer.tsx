import { stopSubmit } from "redux-form"
import { authAPI, securityAPI } from "../api/api"



const SET_USER_DATA = '/auth/SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = '/auth/GET_CAPTCHA_URL_SUCCESS'

export type InitialStateType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    captchaUrl?: any
}
export type AuthActionsType =
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof getCaptchaUrlSuccess>

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}
export const authReducer = (state: InitialStateType = initialState, action: AuthActionsType) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state
    }
}

export const setAuthUserData = (userId: number|null, email: string|null, login: string|null, isAuth: boolean|null) =>
    ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } } as const)

export const getCaptchaUrlSuccess = (captchaUrl: string) =>
    ({ type: GET_CAPTCHA_URL_SUCCESS, payload: { captchaUrl } } as const)


//Thunk
export const getAuthUserData = () => async (dispatch: any) => {

    let response = await authAPI.me()
    if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (email: any, password: any, rememberMe: boolean, captcha:any) => async (dispatch: any) => {
    let response = await authAPI.login(email, password, rememberMe, captcha)

    if (response.data.resultCode === 0) {

        dispatch(getAuthUserData())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "some error"
        dispatch(stopSubmit("login", { _error: message }))
    }

}

export const getCaptchaUrl = () => async (dispatch: any) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url

    dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export const logout = () => async (dispatch: any) => {
    let response = await authAPI.logout()
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null,false));
        }
}


export default authReducer