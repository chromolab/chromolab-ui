import React, {Component} from 'react'

class Discount extends Component {
	state = {
		open: false
	}
	_toggle() {
		this.setState({
			open: !this.state.open
		})
	}
	render() {
		const {
			props: {
				title,
				text
			},
			state: {
				open
			}
		} = this
		return (
			<div className="discount">
				<div className="discount__title" onClick={::this._toggle}>{title}</div>
				<div className={`discount__text ${open ? 'discount__text--open' : 'discount__text--closed'}`}>{text}</div>
			</div>
		)
	}
}

export default Discount
