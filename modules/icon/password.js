import React, { Component } from 'react'

class IconPassword extends Component {
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
			<svg {...newProps} viewBox="0 0 64.827 64.891">
				<path d="M12.69 64.614l-8.875.278-3.57-3.14L0 51.85l37.98-37.732 12.693 12.764L12.69 64.614"/>
				<path d="M33.077 50.625L31.39 52.5h-9.813V41h11.5"/>
				<path d="M23.827 58.75l-1.812 1.75h-9.688V49h11.5M44.327 0c-11.322 0-20.5 9.178-20.5 20.5S33.005 41 44.327 41s20.5-9.178 20.5-20.5S55.65 0 44.327 0zm10.49 19.01l-3.646 3.647c-.39.39-1.025.39-1.417 0l-7.412-7.413c-.39-.392-.39-1.026 0-1.417l3.647-3.646c.392-.39 1.026-.39 1.417 0l7.414 7.414c.392.39.39 1.025 0 1.416z"/>
			</svg>
		)
	}
}

export default IconPassword
