import React, { Component } from 'react'

class IconCoins extends Component {
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
			<svg {...newProps} viewBox="0 0 104.667 105.402">
				<path fill="#FAF5F6" d="M71.83 40.754c-15.376 0-28.615-7.36-31.166-15.74.068 1.346 0 3.014 0 4.064 0 9.85 13.954 17.833 31.167 17.833S103 38.928 103 29.08c0-1.05.05-3.01.037-4.315-2.55 8.38-15.827 15.99-31.204 15.99zM32.645 86.417c-15.377 0-28.616-7.36-31.167-15.74.068 1.346 0 3.014 0 4.064 0 9.85 13.954 17.834 31.167 17.834S63.812 84.59 63.812 74.74c0-1.05.05-3.01.037-4.314-2.552 8.38-15.83 15.99-31.205 15.99z"/>
				<path fill="#FAF5F6" d="M32.645 97.492c-15.377 0-28.616-7.36-31.167-15.74.068 1.346 0 3.014 0 4.064 0 9.85 13.954 17.833 31.167 17.833s31.167-7.985 31.167-17.834c0-1.05.05-3.01.037-4.315-2.552 8.38-15.83 15.992-31.205 15.992z"/>
				<ellipse cx="71.831" cy="17.834" fill="#FAF5F6" rx="31.167" ry="17.833"/>
				<ellipse cx="32.664" cy="63.667" fill="#FAF5F6" rx="31.167" ry="17.833"/>
				<path fill="#FAF5F6" d="M103.033 36.105c-2.55 8.38-15.825 15.77-31.202 15.77-2.03 0-4.017-.115-5.94-.328 1.688 1.723 3.252 3.96 3.44 6.42.826.038 1.658.064 2.5.064C89.045 58.03 103 50.048 103 40.2c0-1.05.048-2.65.035-4.093zM102.998 58.29c-2.55 8.38-15.79 16.282-31.167 16.282-.807 0-1.605-.02-2.397-.056-.02 2.38-.044 4.54-.063 6.152.813.037 1.632.06 2.462.06C89.045 80.73 103 72.746 103 62.897c-.002-1.05.078-1.65-.002-4.607z"/>
				<path fill="#FAF5F6" d="M102.998 47.068c-2.55 8.38-15.79 16.284-31.167 16.284-.807 0-1.605-.02-2.397-.057-.02 2.38-.044 4.54-.063 6.152.813.037 1.632.06 2.462.06 17.213 0 31.167-7.983 31.167-17.832-.002-1.05.078-1.648-.002-4.607z"/>
			</svg>
		)
	}
}

export default IconCoins