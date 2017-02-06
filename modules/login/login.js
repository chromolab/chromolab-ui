import React, {Component} from 'react'

import Input from '../input/input'
import Social from '../social/social'

class Login extends Component {
	render() {
		return (
			<form className="form login">
				<Input type="email" />
				<Input type="password" />
				<button className="form__button">Войти</button>
				<Social />
				<div className="form__footer">
					<a href="#" className="form__link">Забыли пароль?</a>
					<a href="#" className="form__link">Регистрация</a>
				</div>
			</form>
		)
	}
}

export default Login
