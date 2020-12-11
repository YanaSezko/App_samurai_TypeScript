import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { Redirect, RouteComponentProps, withRouter } from "react-router-dom";
import { RootStateType } from "../../redux/store";
import { getUserProfile } from './../../redux/profile-reducer';
import { stat } from "fs";


type PathParamsType = {
    userId:any
}
type PropsType =RouteComponentProps<PathParamsType> & OwnPropsType

type MapStatePropsType ={
    profile:any
    isAuth: boolean
}
type MapDispatchPropsType ={
    getUserProfile:any
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType



class ProfileContainer extends React.Component<PropsType> {
    componentDidMount(){
        let userId = this.props.match.params.userId
        if(!userId){userId=6377}
         this.props.getUserProfile(userId)
}

    render(){
     if(!this.props.isAuth)return<Redirect to={"/login"}/>
    return (        
        <Profile {...this.props}
        profile={this.props.profile}
        />
    )
}
}

let mapStateToProps =(state:RootStateType):MapStatePropsType =>({
 profile: state.profilePage.profile ,
 isAuth: state.auth.isAuth
})

export let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps,{getUserProfile})(WithUrlDataContainerComponent);
