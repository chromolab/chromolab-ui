import React, { Component } from 'react'

class IconMarker extends Component {
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
			<svg {...newProps} viewBox="0 0 109.425 145.884">
				<linearGradient id="icon-marker-a" x1="54.688" x2="54.8" y1="14.046" y2="116.449" gradientUnits="userSpaceOnUse">
					<stop offset="0" stopColor="#E31E70"/>
					<stop offset="1" stopColor="#452F8A"/>
				</linearGradient>
				<path fill="url(#icon-marker-a)" d="M107.917 54.185c0 12.31-5.403 25.193-12.424 34.207-9.732 12.494-40.76 57.492-40.76 57.492S26.754 104.91 17.124 91.792c-8.055-10.97-15.58-22.92-15.58-37.607C1.546 24.81 25.36 1 54.733 1s53.185 23.81 53.185 53.185z"/>
				<path fill="#FFF" d="M54.732 84.538c-17.645 0-32-14.355-32-32s14.355-32 32-32 32 14.355 32 32-14.356 32-32 32zm0-54c-12.13 0-22 9.87-22 22s9.87 22 22 22 22-9.87 22-22-9.87-22-22-22z"/>
			</svg>
		)
	}
}

export default IconMarker
