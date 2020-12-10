import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";


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
const mapStateToProps=(state:any)=>({
    isAuth:state.auth.isAuth,
    login:state.auth.login

})
//@ts-ignore
export default connect(mapStateToProps,{getAuthUserData})(HeaderContainer);
