import React from "react";
import Profile from "./Profile";
import axios from "axios"
import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import { setUserProfile,
    updateNewPostTextActionCreator,
    addPostActionCreator
 }from "../../redux/profile-reducer"
import { RouteComponentProps, withRouter } from "react-router-dom";
import { RootStateType } from "../../redux/store";


type PathParamsType = {
    userId:any
}
type PropsType =RouteComponentProps<PathParamsType> & OwnPropsType

type MapStatePropsType ={
    profile:any
}
type MapDispatchPropsType ={
    setUserProfile:(profile:any)=>void
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType



class ProfileContainer extends React.Component<PropsType> {
    componentDidMount(){
        let userId = this.props.match.params.userId
        if(!userId){userId=2}
            
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId)
     
    .then(response => {
        this.props.setUserProfile(response.data)
        })
}

    render(){
   
    return (        
        <Profile {...this.props}
        profile={this.props.profile}
        />
    )
}
}

let mapStateToProps =(state:RootStateType):MapStatePropsType =>({
 profile: state.profilePage.profile 
})

export let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps,{
    setUserProfile/* ,
    updateNewPostTextActionCreator,
    addPostActionCreator  */
} )(WithUrlDataContainerComponent);
