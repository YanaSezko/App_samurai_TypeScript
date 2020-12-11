import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { RootStateType } from "../../redux/store";
import { getUserProfile } from './../../redux/profile-reducer';
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";


type PathParamsType = {
    userId: any
}
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

type MapStatePropsType = {
    profile: any
}

type MapDispatchPropsType = {
    getUserProfile: any
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType 



class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) { userId = 6377 }
        this.props.getUserProfile(userId)
    }

    render() {

        return (
            <Profile {...this.props}
                profile={this.props.profile}
            />
        )
    }
}
let mapStateToProps = (state: RootStateType): MapStatePropsType => ({
    profile: state.profilePage.profile
})

export default compose(
    connect(mapStateToProps, { getUserProfile }),
    withRouter,
    //withAuthRedirect
)(ProfileContainer)
