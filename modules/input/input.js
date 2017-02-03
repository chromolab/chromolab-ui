import React, {Component} from 'react'

import Icon from '../icon/icon'
import Img from '../img/img'

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

		return (
			<div className={`input ${className}`}>
				<Icon className="input__icon" type={type}><Img size="25" /></Icon>
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
