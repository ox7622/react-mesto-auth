import { useForm } from "../hooks/useForm";
import React from "react";
import Header from "./Header";
import { Link, Redirect } from "react-router-dom";
const Login = ({ onLogin, buttonText, isLoggedIn }) => {

    const { values, handleChange } = useForm({
        email: '',
        password: ''
    })

    function handleSubmit(e) {
        e.preventDefault();
        onLogin(values);
    }
    if (isLoggedIn) {
        return <Redirect to="/react-mesto-auth/main" />
    }

    return (
        <>
            <Header><li><Link to="sign-up" className="header__link">Регистрация</Link></li></Header>
            <div className="form__container">
                <form className='form' name='sign-in' onSubmit={handleSubmit} >
                    <h2 className='form__title'>Вход</h2>
                    <input
                        className="form__input"
                        required
                        type="email"
                        value={values.email}
                        onChange={handleChange}
                        name="email"
                        id='email-input'
                        autoComplete="username"
                        placeholder="Email"
                        minLength="5"
                        maxLength="70" />
                    <span className="form__error"></span>
                    <input
                        className="form__input"
                        required
                        type="password"
                        name='password'
                        value={values.password}
                        onChange={handleChange}
                        autoComplete="password"
                        id='pwd-input'
                        placeholder="Пароль"
                        minLength="5"
                        maxLength="70" />
                    <span className="form__error"></span>
                    <button className="form__submit" type="submit">{buttonText}</button>
                </form>
            </div>
        </>
    )
}
export default Login;