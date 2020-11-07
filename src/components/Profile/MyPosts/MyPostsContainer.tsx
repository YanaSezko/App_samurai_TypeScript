import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";

import MyPosts from "./MyPosts";

import { connect } from "react-redux";
import { AppStateType } from "../../../redux/redux-store";


const mapStateToProps = (state:AppStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch:any) => {
    return {
        updateNewPostText:(text:string)=>{
           
            dispatch(updateNewPostTextActionCreator(text))
        },
        addPost: ()=>{
            dispatch(addPostActionCreator())
        } 
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer

