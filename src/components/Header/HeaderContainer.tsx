import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import {logout} from "./../../redux/auth-reducer"
import { RootStateType } from "../../redux/store";


type PropsType = OwnPropsType

type MapStatePropsType ={
}
type MapDispatchPropsType ={
}
type OwnPropsType = MapStatePropsType & MapDispatchPropsType


class HeaderContainer extends React.Component <PropsType>{
       render(){
    return <Header {...this.props}/>
    }
}
const mapStateToProps=(state:RootStateType)=>({
    isAuth:state.auth.isAuth,
    login:state.auth.login,
    logout:state.auth.logout

})

export default connect(mapStateToProps,{logout})(HeaderContainer);
