import React, {Component} from 'react'

import IconVk from '../icon/vk.svg'
import IconFacebook from '../icon/facebook.svg'
import IconInstagram from '../icon/instagram.svg'

class Social extends Component {
	render() {
		return (
			<div className="social">
				<div className="social__note">Зарегистрироваться <br/>через соцсети</div>
				<div className="social__icons">
					<IconVk className="social__icon social__icon--facebook" />
					<IconFacebook className="social__icon social__icon--vk" />
					<IconInstagram className="social__icon social__icon--instagram" />
				</div>
			</div>
		)
	}
}

export default Social
