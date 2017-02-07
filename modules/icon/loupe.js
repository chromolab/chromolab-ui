import React, { Component } from 'react'

class IconLoupe extends Component {
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
			<svg {...newProps} viewBox="0 0 30.539 30.667">
				<path d="M27.825 30.064c-.512 0-1.023-.195-1.414-.586L11.24 14.305c-.78-.78-.78-2.047 0-2.828.78-.78 2.048-.78 2.828 0L29.24 26.65c.78.78.78 2.047 0 2.828-.39.39-.903.586-1.415.586z"/>
				<circle cx="12.652" cy="12.891" r="10.666" fill="#FFF"/>
				<path d="M12.652 24.83C6.07 24.83.712 19.476.712 12.893S6.07.952 12.653.952c6.583 0 11.94 5.357 11.94 11.94 0 6.582-5.357 11.94-11.94 11.94zm0-21.33C7.472 3.5 3.26 7.71 3.26 12.89s4.212 9.393 9.392 9.393 9.393-4.214 9.393-9.393c0-5.18-4.214-9.393-9.393-9.393z"/>
			</svg>
		)
	}
}

export default IconLoupe
