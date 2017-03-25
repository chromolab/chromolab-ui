import React, {Component} from 'react'
import { Link } from 'react-router'

import Phone from '../phone/phone'
import IconPhone from '../icon/phone.svg'

class Footer extends Component {
	render() {
		return (
			<div className="footer">
				<Link to="/callback" className="footer__callback">
					<IconPhone className="footer__callback-icon" />
				</Link>
				<span className="footer__phone">
					<Phone />
				</span>
				<Link to="/question" className="footer__faq"></Link>
			</div>
		)
	}
}

export default Footer
