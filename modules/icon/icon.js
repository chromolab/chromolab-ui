import React, {Component} from 'react'

class Icon extends Component {
	render() {
		const {
			className
		} = this.props

		return (
			<span className={`icon ${className}`}>
				{this.props.children}
			</span>
		)
	}
}

export default Icon
