import React, {Component} from 'react'
import { Link } from 'react-router'

import IconTube from '../icon/tube.svg'
import IconCoins from '../icon/coins.svg'

class Minicart extends Component {
	render() {
		return (
			<div className="minicart">
				<div className="minicart__amount">
					<IconTube className="minicart__tube" />
					5
				</div>
				<span className="minicart__price">15 508</span>
				<Link to="/cart" className="minicart__button">
					<IconCoins className="minicart__coins" />
				</Link>
			</div>
		)
	}
}

export default Minicart
