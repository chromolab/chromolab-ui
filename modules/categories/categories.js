import React, {Component} from 'react'

import IconArrow from '../icon/arrow.svg'
import Analizes from '../analyzes/analyzes'

class Categories extends Component {
	state = {
		open: false
	}
	_toggle() {
		this.setState({
			open: !this.state.open
		})
	}
	render() {
		const {
			open
		} = this.state
		return (
			<div className="categorys">
				<div className={`category ${open ? 'category--open' : ''}`} onClick={::this._toggle}>
					<div className="category__name">
						Общеклинические анализы
						<IconArrow className="category__icon" />
					</div>
					<div className="category__content">
						<Analizes />
					</div>
				</div>
			</div>
		)
	}
}

export default Categories
