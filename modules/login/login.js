import React, {Component} from 'react'
import { Link } from 'react-router'

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
					<Link to="/forget" className="form__link">Забыли пароль?</Link>
					<Link to="/reg" className="form__link">Регистрация</Link>
				</div>
			</form>
		)
	}
}

export default Login
