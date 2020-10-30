import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import { StoreType } from "../../../redux/store";
import MyPosts from "./MyPosts";
import StoreContext from './../../../StoreContext';


type MyPostsContainerType = {
    store: StoreType
}

const MyPostsContainer = () => {
   
    return <StoreContext.Consumer>
        {store => 
          { 
            function addPost() {
                store.dispatch(addPostActionCreator())
            }
        
            function onPostChange(text: string) {
                let action = updateNewPostTextActionCreator(text)
                store.dispatch(action)
            }
            return <MyPosts
                updateNewPostText={onPostChange}
                addPost={addPost}
                posts={store.getState().profilePage.posts}
                newPostText={store.getState().profilePage.newPostText}
            />}
        }
    </StoreContext.Consumer>
}
export default MyPostsContainer
    ;
