import React, {Component} from 'react'

class Discount extends Component {
	state = {
		open: false
	}
	_toggle = () => {
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
			<div className={`discount ${open ? 'discount--open' : 'discount--closed'}`}>
				<div className="discount__title" onClick={this._toggle}>{title}</div>
				<div className="discount__text">{text}</div>
			</div>
		)
	}
}

export default Discount
