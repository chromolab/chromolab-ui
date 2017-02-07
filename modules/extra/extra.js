import React, {Component} from 'react'

import IconArrow from '../icon/arrow.svg'

class Extra extends Component {
	state = {
		open: false
	}
	toggle() {
		this.setState({
			open: !this.state.open
		})
	}
	render() {
		const {
			open
		} = this.state

		return (
			<div className={`extra ${open ? 'extra--open' : 'extra--closed'}`}>
				<div className="extra__header">
					<div className="extra__title">Забор крови</div>
					<div className="extra__price">180</div>
					<div className="extra__button" onClick={::this.toggle}>
						<IconArrow  className="extra__arrow" />
					</div>
				</div>
				<div className="extra__content">
					<div className="extra__item">
						<div className="extra__title">Собственный материал</div>
						<div className="extra__price">0</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Extra
