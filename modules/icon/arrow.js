import React, { Component } from 'react'

class IconArrow extends Component {
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
			<svg {...newProps} viewBox="0 0 86.11 46.38">
				<path d="M84.75 5.13l-3.525-3.546L43.25 39.33 4.687 1 1.162 4.546l41.5 41.25.004-.004.584.587"/>
			</svg>
		)
	}
}

export default IconArrow
