import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { login } from '../../redux/auth-reducer';
import { RootStateType } from '../../redux/store';
import { Input } from '../common/FormsControls/FormsControls';
import { required } from './../../utils/validators/validators';
import style from '../common/FormsControls/FormsControls.module.css'

type FormDataType = {
    email: string
    password: string
    rememborMe: boolean
    isAuth: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div><Field placeholder={"Email"}
                name={"email"}
                component={Input}
                validate={[required]} /></div>
            <div><Field placeholder={"Password"}
                name={"password"}
                type={"password"}
                component={Input}
                validate={[required]} /></div>
            <div><Field type={"checkbox"}
                name={"rememborMe"}
                component={Input} /></div>
            {error && <div className={style.formSummaryError}>
               {error}
            </div>}
            <div><button>Login</button></div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)

const Login = (props: any) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememborMe)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}


const mapStateToProps = (state: RootStateType) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login)