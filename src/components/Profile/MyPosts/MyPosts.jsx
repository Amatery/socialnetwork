import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../Utils/Validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const MyPosts = (props) => {
    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    );
};

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={'newPostText'} placeholder={'Enter your message here...'}
                       validate={[required,maxLength10]}/>
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
};

let AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm);

export default MyPosts;
