import React, {Component} from 'react'

import Categories from '../categories/categories'
import Tabs from '../tabs/tabs'

class Catalog extends Component {
	render() {
		return (
			<div className="catalog">
				<Tabs />
				<Categories />
			</div>
		)
	}
}

export default Catalog
