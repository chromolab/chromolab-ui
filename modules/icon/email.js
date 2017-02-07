import React, { Component } from 'react'

class IconEmail extends Component {
	render() {
		const {
			props,
			props: {
				className
			}
		} = this
		const newProps = {
			...props,
			className: `icon ${className ? className : ''}`
		}

		return (
			<svg {...newProps} viewBox="0 0 80 52.333">
				<path d="M0 0v52.333h80V0H0zm71 43.167H8.834V9H71v34.167z"/>
				<path d="M50 31.333H14.334V15.167H50v16.166zm-32.666-3H47V18.167H17.334v10.166z"/>
			</svg>
		)
	}
}

export default IconEmail
