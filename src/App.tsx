import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navdar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route } from "react-router-dom";
import { ActionsType, RootStateType, StoreType } from './redux/store';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';


/* type AppType = {
    state: RootStateType
    store: StoreType
    dispatch: (action: ActionsType) => void
} */

const App = () => {
    return (
        <div className="app-wrapper">
            <Header />
            <Navbar />
            <main className='app-wrapper-content'>
                <Route path='/profile' render={() => <Profile />} />
                <Route /*exact*/ path='/dialogs' render={() => <DialogsContainer />} />
                <Route path='/users' render={() => <UsersContainer />} />
            </main>
        </div>
    )
}

export default App;
