import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import {getAuthUserData,logout} from "./../../redux/auth-reducer"
import { RootStateType } from "../../redux/store";


type PropsType = OwnPropsType

type MapStatePropsType ={
   
}
type MapDispatchPropsType ={
    getAuthUserData:any
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType



class HeaderContainer extends React.Component <PropsType>{
    componentDidMount(){
    this.props.getAuthUserData()
    }


    render(){
    return <Header {...this.props}/>
    }
}
const mapStateToProps=(state:RootStateType)=>({
   isAuth:state.auth.isAuth,
    login:state.auth.login,
    logout:state.auth.logout

})

export default connect(mapStateToProps,{getAuthUserData,logout})(HeaderContainer);
