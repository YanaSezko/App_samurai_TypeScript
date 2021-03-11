import React, { Suspense } from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navdar";
import { HashRouter, Redirect, Route, Switch, withRouter } from "react-router-dom";
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
//import ProfileContainer from './components/Profile/ProfileContainer';
//import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer'
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import { RootStateType } from './redux/store';
import Preloader from './components/common/Preloader';
import { store } from './redux/redux-store';
import { withSuspense } from './hoc/withSuspense';
import { AnyNsRecord } from 'dns';
//@ts-ignore
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
//@ts-ignore
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

type PropsType = OwnPropsType

type MapStatePropsType = {
    initialized: boolean
}
type MapDispatchPropsType = {
    initializeApp: any
}
type OwnPropsType = MapStatePropsType & MapDispatchPropsType


class App extends React.Component<PropsType>{
    catchAllUnhandledErrors = ({reason,promise}: any) => {
        alert("Some error occured")
    }
    componentDidMount() {
        this.props.initializeApp()
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }
    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer />
                <Navbar />
                <main className='app-wrapper-content'>
                    <Switch>
                        <Route exact path='/'
                            render={() => <Redirect to={"/profile"} />} />

                        <Route path='/profile/:userId?'
                            render={withSuspense(ProfileContainer)} />

                        <Route path='/dialogs'
                            render={withSuspense(DialogsContainer)} />

                        <Route path='/users'
                            render={() => <UsersContainer />} />

                        <Route path='/login'
                            render={() => <Login />} />

                        <Route path='*'
                            render={() => <div>404 NOT FOUND</div>} />
                    </Switch>
                </main>
            </div>
        )
    }
}

const mapStateToProps = (state: RootStateType) => ({
    initialized: state.app.initialized
})

let AppContainer: any = compose(
    withRouter,
    connect(mapStateToProps, { initializeApp }))(App);

const MainApp = (props: any) => {
    return <HashRouter/*  basename = {process.env.PUBLIC_URL} */>
        <Provider store={store} >
            < AppContainer />
        </Provider>
    </HashRouter>
}

export default MainApp;