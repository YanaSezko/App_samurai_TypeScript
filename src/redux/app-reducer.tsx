
import { getAuthUserData } from './auth-reducer';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

export type InitialStateType = {
    initialized: boolean
}
export type AppActionsType =
    | ReturnType<typeof initializedSuccess>


let initialState = {
    initialized: false
}
export const appReducer = (state: InitialStateType = initialState, action: AppActionsType) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }

        default:
            return state
    }
}

export const initializedSuccess = () =>
    ({ type: INITIALIZED_SUCCESS } as const)

//Thunk
export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData())

    Promise.all([promise])
    .then(()=>{
     dispatch(initializedSuccess())
 })

}

export default appReducer