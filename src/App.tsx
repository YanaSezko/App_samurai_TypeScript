import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navdar";
import { Route } from "react-router-dom";
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer'
/* 
type AppType = {
    state: RootStateType
    store: StoreType
    dispatch: (action: ActionsType) => void

} */
const App = (props:any) => {
    debugger
    return (
        <div className="app-wrapper">
            <HeaderContainer />
            <Navbar />
            <main className='app-wrapper-content'>
                <Route path='/profile/:userId?' 
                //@ts-ignore
                render={() => <ProfileContainer />} />
                
                <Route /*exact*/ path='/dialogs' 
                //@ts-ignore
                render={() => <DialogsContainer />} />
                
                <Route path='/users' 
                //@ts-ignore
                render={() => <UsersContainer />} />
                <Route path='/login' 
                render={() => <Login />} />    
            </main>
        </div>
    )
}

export default App;
