import React, {Component} from 'react'

import IconArrow from '../icon/arrow.svg'
import Analizes from '../analyzes/analyzes'

class Category extends Component {
	state = {
		open: false,
	}
	_toggle = () => {
		this.setState({
			open: !this.state.open
		})
	}
	render() {
		const {
			data: {
				title,
				products = [],
			},
		} = this.props
		const { open } = this.state


		return (
			<div
				className={`category ${open ? 'category--open' : 'category--closed'}`}
				onClick={this._toggle}
			>
				<div className="category__name">
					{title}
					<IconArrow className="category__icon" />
				</div>
				<div className="category__content">
					<Analizes data={products} />
				</div>
			</div>
		)
	}
}

export default Category
