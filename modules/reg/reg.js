import React, {Component} from 'react'

import Input from '../input/input'
import Social from '../social/social'

class Reg extends Component {
	render() {
		return (
			<form className="form reg">
				<Input type="email" />
				<Input type="password" />
				<Input type="password" />
				<button className="form__button">Регистрация</button>
				<Social />
			</form>
		)
	}
}

export default Reg
