import React, { Component } from 'react'

class IconUser extends Component {
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
			<svg {...newProps} viewBox="0 0 126.66 132.55">
				<path d="M99.487 82.012c-6.188-1.84-19.594-4.313-21-9-2.718-9.06 14.01-26.142 15-35 1.427-4.426-3.384-2.616-3-6 3.07-21.286-11.952-30.804-27.132-30.57-15.18-.234-30.202 9.284-27.132 30.57.384 3.384-4.427 1.574-3 6 .99 8.858 17.718 25.94 15 35-1.406 4.687-14.813 7.16-21 9-17.258 5.134-29.92 11.34-23 34 13.52 10.036 36.293 14.912 59.132 14.874 22.84.038 45.613-4.838 59.132-14.874 6.92-22.66-5.742-28.866-23-34z"/>
			</svg>

		)
	}
}

export default IconUser
