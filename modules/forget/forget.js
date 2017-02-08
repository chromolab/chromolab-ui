import React, {Component} from 'react'
import { Link } from 'react-router'

import Input from '../input/input'

class Forget extends Component {
	render() {
		return (
			<form className="form forget">
				<div className="form__header">Введите e-mail, указанный <br/>при регистрации.</div>
				<Input
					type="email"
					required
				/>
				<button className="form__button">Отправить</button>
				<div className="form__footer">
					<Link to="/login" className="form__link">Войти</Link>
					<Link to="/reg" className="form__link">Регистрация</Link>
				</div>
			</form>
		)
	}
}

export default Forget
