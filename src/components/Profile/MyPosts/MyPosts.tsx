import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import { PostType } from "../../../redux/store";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

type MyPostType = {
  //  updateNewPostText: (text: string) => void
    addPost: (values:string) => void
    posts: PostType[]
}

const MyPosts = React.memo((props: MyPostType) => {

    let postsElements = props.posts.map(p => <Post id={p.id} message={p.message} />)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let onAddPost =(values: FormDataType)=> {
        props.addPost(values.newPostText)
    }

    return (
        <section className={s.myposts}>
            <h2>my posts</h2>
            <AddNewPostFormRedux onSubmit={onAddPost} />
            <ul >
                {postsElements}
            </ul>
        </section>
    )
})
type FormDataType ={
    newPostText:string
}
const maxLength10 =maxLengthCreator(10)

const AddNewPostForm:React.FC<InjectedFormProps<FormDataType>> = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder={"Post message"} name="newPostText" component={Textarea} validate={[required,maxLength10]}/>
            <p><button>Add post</button></p>
        </form>
    )
}

let AddNewPostFormRedux = reduxForm<FormDataType>({ form: "ProfileAddNewPostForm" })(AddNewPostForm)

export default MyPosts;
