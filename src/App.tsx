import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navdar";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer'
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import { RootStateType } from './redux/store';
import Preloader from './components/common/Preloader';



type PropsType = OwnPropsType

type MapStatePropsType = {
    initialized: boolean
}
type MapDispatchPropsType = {
    initializeApp: any
}
type OwnPropsType = MapStatePropsType & MapDispatchPropsType


class App extends React.Component<PropsType>{
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }


        return (
            <BrowserRouter>
            
                <Provider store={
                    //@ts-ignore
                    store} >
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
                </Provider>
            </BrowserRouter>
        )
    }
}

const mapStateToProps = (state: RootStateType) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, { initializeApp }))(App);
