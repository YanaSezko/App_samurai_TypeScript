import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { RootStateType } from "../../redux/store";
import { getUserProfile, getStatus, updateStatus} from './../../redux/profile-reducer';
import { compose } from "redux";


type PathParamsType = {
    userId: any
}
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

type MapStatePropsType = {
    profile: any
    status:string
    authorizedUserId:number
    isAuth:boolean
}

type MapDispatchPropsType = {
    getUserProfile: any,
    getStatus:any,
    updateStatus:any
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType 



class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) { 
            userId = this.props.authorizedUserId 
            if(!userId){
                this.props.history.push("/login")
            }
        }

        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {

        return (
            <Profile {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
            />
        )
    }
}
let mapStateToProps = (state: RootStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
    withRouter,
   // withAuthRedirect
)(ProfileContainer)