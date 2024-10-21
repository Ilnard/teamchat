import PropTypes from "prop-types";

const SignUpFormNameSurname = ({next, updateUserName, updateLogin}) => {

    return (
        <div className="sign-form-slide sign-up-form-name-surname">
            <p className="sign-form__tip">
                Для начала введите<br/>
                <span className="c-accent">имя фамилию</span> и <span className="c-accent">логин</span>
            </p>
            <div className="sign-form__input-field">
                <input type="text" className="sign-form__input" placeholder="Имя Фамилия"
                       onChange={(e) => updateUserName(e.target.value)}/>
            </div>
            <div className="sign-form__input-field">
                <input type="text" className="sign-form__input" placeholder="Логин"
                       onChange={(e) => updateLogin(e.target.value)}/>
            </div>
            <div className="sign-form__buttons">
                <button type="button" className="sign-form__btn primary" onClick={next}>Далее</button>
            </div>
        </div>
    )
}

SignUpFormNameSurname.propTypes = {
    next: PropTypes.func,
    updateUserName: PropTypes.func,
    updateLogin: PropTypes.func
}

export default SignUpFormNameSurname