import React, {Component} from 'react'

import Input from '../input/input'

class Callback extends Component {
	render() {
		return (
			<form className="form callback">
				<Input type="name" />
				<Input type="email" />
				<Input type="tel" />
				<button className="form__button">Перезвоните мне</button>
				<div className="form__note">Мы перезвоним Вам <br/>в ближайшее время</div>
			</form>
		)
	}
}

export default Callback
