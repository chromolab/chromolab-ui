import React, { Component } from 'react'

class IconTube extends Component {
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
			<svg {...newProps} viewBox="0 0 22.192 78.598">
				<path d="M18.815 69.73c0 4.052-3.283 7.335-7.333 7.335-4.05 0-7.334-3.283-7.334-7.334v-26c0-4.05 3.283-7.332 7.334-7.332 4.05 0 7.333 3.283 7.333 7.333v26z"/>
				<path d="M4.148 12.335h3.9v36.75h-3.9zM14.915 12.335h3.9v36.75h-3.9z"/>
				<path d="M18.815 17.323h-3.9V8.428c0-3.065 2.494-5.56 5.56-5.56v3.9c-.915 0-1.66.744-1.66 1.66v8.895zM8.048 17.323h-3.9V8.428c0-.915-.744-1.66-1.66-1.66v-3.9c3.066 0 5.56 2.495 5.56 5.56v8.895z"/>
			</svg>
		)
	}
}

export default IconTube
