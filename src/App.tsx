import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navdar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import store, {ActionsType, StoreType} from "./redux/state";


type AppType = {
    store:StoreType
    dispatch:(action: ActionsType) => void
}

const App: React.FC<AppType> = (props) => {
    let state = props.store.getState()
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <main className='app-wrapper-content'>
                <Route path='/profile' render={() => <Profile profilePage={state.profilePage} dispatch={props.store.dispatch.bind(props.store)}/>}/>
                <Route /*exact*/ path='/dialogs' render={() => <Dialogs store={props.store}/>}/>
            </main>
        </div>
    )
}

export default App;
