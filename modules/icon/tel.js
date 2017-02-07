import React, { Component } from 'react'

class IconTel extends Component {
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
			<svg {...newProps} viewBox="0 0 61 86">
				<path d="M0 0v86h61V0H0zm30.5 79.333c-3.682 0-6.666-2.984-6.666-6.666S26.818 66 30.5 66s6.667 2.985 6.667 6.667-2.984 6.666-6.666 6.666zM52.168 60H8.834V9h43.333v51z"/>
			</svg>
		)
	}
}

export default IconTel
