import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import {getAuthUserData} from "./../../redux/auth-reducer"


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

/*     isAuth:state.auth.isAuth,
    login:state.auth.login */

})

export default connect(mapStateToProps,{getAuthUserData})(HeaderContainer);
