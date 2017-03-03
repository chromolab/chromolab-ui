import React, {Component} from 'react'

const types = [
	{
		name: 'all',
		text: 'Все',
	},
	{
		name: 'complex',
		text: 'Комплексы',
	},
	{
		name: 'top',
		text: 'ТOP',
	},
	{
		name: 'abc',
		text: 'А-Я',
	},
]

class Tabs extends Component {
	state = {
		active: 'all'
	}
	_toggle = (type) => () => {
		this.setState({
			active: type
		})
		this.props.changeType(type)
	}
	render() {
		return (
			<div className="tabs">
				{types.map(({ name, text }) => (
					<span
						key={name}
						onClick={this._toggle(name)}
						className={`tabs__tab ${this.state.active === name ? '_active' : '' }`}
					>{text}</span>
				))}
			</div>
		)
	}
}

export default Tabs
