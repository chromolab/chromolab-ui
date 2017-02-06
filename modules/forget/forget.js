import React, {Component} from 'react'

import Input from '../input/input'

class Forget extends Component {
	render() {
		return (
			<form className="form forget">
				<div className="form__header">Введите e-mail, указанный <br/>при регистрации.</div>
				<Input type="email" />
				<button className="form__button">Отправить</button>
				<div className="form__footer">
					<a href="#" className="form__link">Войти</a>
					<a href="#" className="form__link">Регистрация</a>
				</div>
			</form>
		)
	}
}

export default Forget
