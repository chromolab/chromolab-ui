import React, {Component} from 'react'

class Categories extends Component {
	state = {
		open: false
	}
	render() {
		const {
			open
		} = this.state
		return (
			<div className="categorys">
				<div className={`category ${open ? 'category--open' : ''}`}>
					<div className="category__name">
						Общеклинические анализы
						<span className="category__icon"></span>
					</div>
					<div className="category__content"></div>
				</div>
			</div>
		)
	}
}

export default Categories
