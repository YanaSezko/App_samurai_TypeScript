import React from 'react';
import { Field, reduxForm } from 'redux-form';

const Login = () => {
    const onSubmit = (formData: any) => {
        console.log(formData)
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}
const LoginForm = (props: any) => {
    console.log('rerender')
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={"Login"} name={"login"} component={"input"} /></div>
            <div><Field placeholder={"Password"} name={"password"} component={"input"} /></div>
            <div><Field type={"checkbox"} name={"rememborMe"} component={"input"} /></div>
            <div><button>Login</button></div>
        </form>
    )
}
const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

export default Login