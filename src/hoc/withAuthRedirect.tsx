import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { RootStateType } from '../redux/store';



export const withAuthRedirect = (Component:any) => {
    class RedirectComponent extends React.Component {
        render() {
            //@ts-ignore
            if (!this.props.isAuth) return <Redirect to={"/login"} />
            return <Component {...this.props} />
        }
    }

    let mapStateToPropsForRedirect = (state: RootStateType) => ({
        isAuth: state.auth.isAuth
    })

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)


    return ConnectedAuthRedirectComponent
}