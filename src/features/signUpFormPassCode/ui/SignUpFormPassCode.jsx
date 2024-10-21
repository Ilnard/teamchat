import PropTypes from "prop-types";

const SignUpFormPassCode = ({prev, updateUserPass, updateUserCode}) => {
    return (
        <div className="sign-form-slide sign-up-form-pass-code">
            <p className="sign-form__tip">
                Теперь придумайте <span className="c-accent">пароль</span><br/>
                и введите <span className="c-accent">код приглашения</span>
            </p>
            <div className="sign-form__input-field">
                <p className="sign-form__example">Ваш пароль</p>
                <input type="password" className="sign-form__input" placeholder="password" onChange={e => updateUserPass(e.target.value)}/>
            </div>
            <div className="sign-form__input-field">
                <p className="sign-form__example">Код приглашения</p>
                <input type="text" className="sign-form__input" placeholder="код" onChange={e => updateUserCode(e.target.value)}/>
            </div>
            <div className="sign-form__buttons">
                <button type="button" className="sign-form__btn" onClick={prev}>Назад</button>
                <button type="submit" className="sign-form__btn primary">Зарегистрироваться</button>
            </div>
        </div>
    )
}

SignUpFormPassCode.propTypes = {
    prev: PropTypes.func,
    updateUserPass: PropTypes.func,
    updateUserCode: PropTypes.func,
}

export default SignUpFormPassCode