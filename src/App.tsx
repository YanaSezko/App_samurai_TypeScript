import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navdar";
import { Route } from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer, { WithUrlDataContainerComponent } from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';

/* 
type AppType = {
    state: RootStateType
    store: StoreType
    dispatch: (action: ActionsType) => void

} */
const App = () => {
    return (
        <div className="app-wrapper">
            <HeaderContainer />
            <Navbar />
            <main className='app-wrapper-content'>
                <Route path='/profile/:userId?' 
                render={() => <ProfileContainer />} />
                
                <Route /*exact*/ path='/dialogs' 
                render={() => <DialogsContainer />} />
                
                <Route path='/users' 
                render={
                    //@ts-ignore
                    () => <UsersContainer />} />
            </main>
        </div>
    )
}

export default App;
