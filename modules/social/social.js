import React, {Component} from 'react'

class Social extends Component {
	render() {
		return (
			<div className="social">
				<div className="social__note">Зарегистрироваться <br/>через соцсети</div>
				<div className="social__icons">
					<div className="social__icon social__icon--facebook"></div>
					<div className="social__icon social__icon--vk"></div>
					<div className="social__icon social__icon--instagram"></div>
				</div>
			</div>
		)
	}
}

export default Social
