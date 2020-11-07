import { combineReducers, createStore } from "redux";
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import usersReducer from "./users-reducer ";



let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    usersPage: usersReducer

});

let store = createStore(reducers);

type ReducerType = typeof reducers//(globalState: AppStateType)=>AppStateType
export type AppStateType= ReturnType<ReducerType>
//@ts-ignore 
window.store = store;

export default store