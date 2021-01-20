import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { Input } from '../common/FormsControls/FormsControls';
import { required } from './../../utils/validators/validators';

const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

type FormDataType ={
    login:string
    password:string
    rememborMe:boolean
}

const LoginForm:React.FC<InjectedFormProps<FormDataType>> = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={"Login"} 
            name={"login"} 
            component={Input}
            validate={[required]} /></div>
            <div><Field placeholder={"Password"} 
            name={"password"} 
            component={Input}
            validate={[required]}  /></div>
            <div><Field type={"checkbox"} 
            name={"rememborMe"} 
            component={Input} /></div>
            <div><button>Login</button></div>
        </form>
    )
}
const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)

export default Login