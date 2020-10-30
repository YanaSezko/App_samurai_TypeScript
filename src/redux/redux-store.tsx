import { combineReducers, createStore } from "redux";
import {StoreType } from "./store";
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';



let redusers = combineReducers({
profilePage: profileReducer,
dialogPage: dialogsReducer

});

let store:StoreType = createStore(redusers);

export default store