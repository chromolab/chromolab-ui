import React, {Component} from 'react'

import Input from '../input/input'

class Question extends Component {
	render() {
		return (
			<div className="form">
				<Input type="name" />
				<Input type="e-mail" />
				<Input type="text" />
				<button className="form__button">Задать вопрос</button>
				<div className="form__note">Вопрос задается конфиденциально</div>
			</div>
		)
	}
}

export default Question
