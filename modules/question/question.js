import React, {Component} from 'react'

import Input from '../input/input'

class Question extends Component {
	render() {
		return (
			<form className="form question">
				<Input type="name" />
				<Input type="email" />
				<Input type="text" />
				<button className="form__button">Задать вопрос</button>
				<div className="form__note">Вопрос задается конфиденциально</div>
			</form>
		)
	}
}

export default Question
