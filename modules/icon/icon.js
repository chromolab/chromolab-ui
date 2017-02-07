import React, {Component} from 'react'

// const icons = {
// 	arrow: require('./arrow.svg'),
// 	'chromolab-icon': require('./chromolab-icon.svg'),
// 	'chromolab-logo': require('./chromolab-logo.svg'),
// 	coins: require('./coins.svg'),
// 	email: require('./email.svg'),
// 	facebook: require('./facebook.svg'),
// 	instagram: require('./instagram.svg'),
// 	loupe: require('./loupe.svg'),
// 	marker: require('./marker.svg'),
// 	password: require('./password.svg'),
// 	phone: require('./phone.svg'),
// 	tel: require('./tel.svg'),
// 	tube: require('./tube.svg'),
// 	user: require('./user.svg'),
// 	vk: require('./vk.svg'),
// }

class Icon extends Component {
	render() {
		const {
			className
		} = this.props

		return (
			<span className={`icon ${className}`}>
				{this.props.children}
			</span>
		)
	}
}

export default Icon
