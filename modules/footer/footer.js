import React, {Component} from 'react'
import { Link } from 'react-router'

import Img from '../img/img'
import Phone from '../phone/phone'


class Footer extends Component {
	render() {
		return (
			<div className="footer">
				<Link to="callback" className="footer__callback">
					<Img size="39" />
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
