import React, { Component } from 'react'

class IconChromolabIcon extends Component {
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
			<svg {...newProps} viewBox="0 0 34.063 21.313">
				<linearGradient id="icon-chromolab-icon-a" x1=".359" x2="33.678" y1="10.677" y2="10.677" gradientUnits="userSpaceOnUse">
					<stop offset="0" stopColor="#E41F70"/>
					<stop offset="1" stopColor="#442D8B"/>
				</linearGradient>
				<path fill="url(#icon-chromolab-icon-a)" d="M10.387 20.854l3.743-5.148h6.9c.65 0 1.21.022 1.692.063-.28-.36-.607-.815-.974-1.363-.37-.548-.724-1.063-1.063-1.542l-3.59-5.3-9.403 13.29H.36L13.2 2.742c.42-.577.948-1.095 1.584-1.554.64-.46 1.447-.69 2.428-.69.937 0 1.72.214 2.35.644.63.43 1.16.96 1.6 1.6l12.515 18.11H10.386z"/>
			</svg>

		)
	}
}

export default IconChromolabIcon
