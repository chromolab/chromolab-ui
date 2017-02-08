import React, {Component} from 'react'
import Inputmask from 'react-input-mask'

import Input from '../input/input'

class Callback extends Component {
	_submit() {
		this.props.router.push('/success')
	}
	render() {
		return (
			<form method="POST" className="form callback" onSubmit={::this._submit}>
				<Input
					type="name"
					name="user"
					placeholder="Имя или псевдоним"
					required
				/>
				<Input
					type="email"
				/>
				<Input
					component={Inputmask}
					mask="+7 (999) 999-99-99"
					type="tel"
					required
				/>
				<button className="form__button">Перезвоните мне</button>
				<div className="form__note">Мы перезвоним Вам <br/>в ближайшее время</div>
			</form>
		)
	}
}

export default Callback
