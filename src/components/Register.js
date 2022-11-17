import { useForm } from "../hooks/useForm";
import Header from "./Header";
import { Link, Redirect } from "react-router-dom";

const Register = ({ buttonText, onRegister, isLoggedIn }) => {


    const { values, handleChange } = useForm({
        password: '',
        email: ''
    });
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onRegister(values).catch(err => {
            console.log(err)
        }
        );

    };

    if (isLoggedIn) {
        return <Redirect to="/sign-in" />
    }


    return (
        <>
            <Header><li><Link to="sign-in" className="header__link">Войти</Link></li></Header>
            <div className="form__container">
                <form className='form' name='sign-up' onSubmit={handleSubmit} >
                    <h2 className='form__title'>Регистрация</h2>
                    <input
                        className="form__input"
                        required
                        type="email"
                        name="email"
                        id="email-reg-input"
                        value={values.email}
                        onChange={handleChange}
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
                        id="pwd-reg-input"
                        value={values.password}
                        onChange={handleChange}
                        autoComplete="password"
                        placeholder="Пароль"
                        minLength="5"
                        maxLength="70" />
                    <span className="form__error"></span>
                    <button className="form__submit" type="submit">{buttonText}</button>
                </form>
                <p className="form__comment">Уже зарегистрированы? <Link to="/sign-in" className="form__link">Войти</Link></p>
            </div>
        </>
    )
}
export default Register;