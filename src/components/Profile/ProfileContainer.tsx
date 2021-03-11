import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { RootStateType } from "../../redux/store";
import { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile } from './../../redux/profile-reducer';
import { compose } from "redux";


type PathParamsType = {
    userId: any
}
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

type MapStatePropsType = {
    profile: any
    status: string
    authorizedUserId: number
    isAuth: boolean
}

type MapDispatchPropsType = {
    getUserProfile: any,
    getStatus: any,
    updateStatus: any,
    savePhoto: any,
    saveProfile:any
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType



class ProfileContainer extends React.Component<PropsType> {
    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push("/login")
            }
        }

        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }


    render() {
        return (

            <Profile {...this.props}
                isOwner={!this.props.match.params.userId}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
                savePhoto={this.props.savePhoto}
                saveProfile={this.props.saveProfile}
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
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile }),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)