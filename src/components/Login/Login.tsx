import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { login } from '../../redux/auth-reducer';
import { RootStateType } from '../../redux/store';
import { createField, Input } from '../common/FormsControls/FormsControls';
import { required } from './../../utils/validators/validators';
import style from '../common/FormsControls/FormsControls.module.css'

type FormDataType = {
    email: string
    password: string
    rememborMe: boolean
    isAuth: boolean
    captcha: null|string
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({ handleSubmit, error, captchaUrl}:any) => {
    return (
        <form onSubmit={handleSubmit}>

            {createField("Email", "email", [required], Input)}
            {createField("Password", "password", [required], Input, { type: "password" })}
            {createField(null, "rememberMe", {}, Input, { type: "checkbox" }, "remember me")}

            {captchaUrl && <img src={captchaUrl} />}
            {captchaUrl && createField("Symbols from image", "captcha", [required], Input, {})}

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
        props.login(formData.email, formData.password, formData.rememborMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }
    return <div>
        <h1>LOGIN</h1>
        //@ts-ignore
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
}


const mapStateToProps = (state: RootStateType) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login)