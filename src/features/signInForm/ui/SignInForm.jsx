import PropTypes from "prop-types"
import {NavLink} from "react-router-dom"

const SignInForm = ({updateLogin, updatePass}) => {
    return (
        <div className="sign-form-slide sign-up-form-name-surname">
            <p className="sign-form__tip">
                Привет!<br/>
                Введите <span className="c-accent">логин</span> и <span className="c-accent">пароль</span>
            </p>
            <div className="sign-form__input-field">
                <input type="text" className="sign-form__input" placeholder="Логин"
                       onChange={(e) => updateLogin(e.target.value)}/>
            </div>
            <div className="sign-form__input-field">
                <input type="password" className="sign-form__input" placeholder="Пароль"
                       onChange={(e) => updatePass(e.target.value)}/>
            </div>
            <div className="sign-form__buttons">
                <div className="sign-form__btn-wrapper">
                    <button type="submit" className="sign-form__btn primary">Войти</button>
                    <p className="sign-form__reg-tip">Нет аккаунта? <NavLink to='/registration'>Зарегистрируйтесь!</NavLink></p>
                </div>
            </div>
        </div>
    )
}

SignInForm.propTypes = {
    updateLogin: PropTypes.func,
    updatePass: PropTypes.func,
}

export default SignInForm