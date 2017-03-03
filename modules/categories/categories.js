import React, {Component} from 'react'

import Category from '../category/category'

class Categories extends Component {
	render() {
		const {
			data,
		} = this.props

		return (
			<div className="categorys">
			{
				data.map((category, index) => (
					<Category
						key={index}
						data={category}
					/>
				))
			}
			</div>
		)
	}
}

export default Categories
