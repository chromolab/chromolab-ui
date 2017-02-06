import React, {Component} from 'react'

class Success extends Component {
	render() {
		return (
			<div className="success">
				<div className="success__title">Ваш запрос <br/>успешно отправлен</div>
				<div className="success__note">Мы перезвоним Вам <br/>в ближайшее время.</div>
				<div className="success__footer">
					<a href="#" className="success__link">Задать еще вопрос</a>
				</div>
			</div>
		)
	}
}

export default Success
