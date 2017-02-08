import React, {Component} from 'react'
import { findDOMNode } from 'react-dom'

// import IconTel from '../icon/tel.svg'
const icons = {
	tel: require('../icon/tel.svg'),
	user: require('../icon/user.svg'),
	email: require('../icon/email.svg'),
	password: require('../icon/password.svg'),
	question: require('../icon/email.svg')
}
const placeholders = {
	tel: 'Телефон',
	user: 'Имя',
	email: 'E-mail',
	password: 'Пароль',
	question: 'Вопрос'
}

class Input extends Component {
	state = {
		value: null,
		valid: true
	}
	_updateValue({ target : { value } }) {
		this.setState({
			value
		})
		this._validate()
	}
	_validate() {
		const field = findDOMNode(this.refs.field)
		this.setState({
			valid: field.validity.valid
		})
	}
	render() {
		const {
			state: {
				valid,
				value
			},
			props,
			props: {
				component,
				type,
				required,
				name = type,
				placeholder = placeholders[type],
			}
		} = this
		const newProps = {...props}
		delete newProps.valid
		delete newProps.component

		return (
			<div className={`form__input input ${valid ? '_valid' : '_invalid'} ${value === null ? '_vergin' : '_dirty'} ${required ? '_required' : '_nometter' }`}>
				{
					React.createElement(
						component || 'input',
						{
							ref: 'field',
							...newProps,
							type,
							name,
							placeholder,
							className: `input__field input__field--${type}`,
							onChange: ::this._updateValue
						}
					)
				}
				{
					React.createElement(
						icons[name],
						{
							className: 'input__icon'
						}
					)
				}
			</div>
		)
	}
}

export default Input
