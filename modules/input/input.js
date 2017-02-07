import React, {Component} from 'react'

// import IconTel from '../icon/tel.svg'
const icons = {
	tel: require('../icon/tel.svg'),
	user: require('../icon/user.svg'),
	email: require('../icon/email.svg'),
	password: require('../icon/password.svg'),
	question: require('../icon/email.svg')
}
const iconsComponents = {
	tel: <icons.tel className="input__icon" />,
	name: <icons.user className="input__icon" />,
	email: <icons.email className="input__icon" />,
	password: <icons.password className="input__icon" />,
	text: <icons.question className="input__icon" />,
}

class Input extends Component {
	render() {
		const {
			props,
			props: {
				type,
				className
			}
		} = this
		delete props.className

		const icon = iconsComponents[type]

		return (
			<div className={`input ${className ? className : ''}`}>
				{
					icon
				}
				{
					type === 'text'
						? (
							<textarea name={type} className="input__field input__field--text" {...props} ></textarea>
						)
						: (
							<input type={type} name={type} className="input__field" {...props} />
						)
				}
			</div>
		)
	}
}

export default Input
