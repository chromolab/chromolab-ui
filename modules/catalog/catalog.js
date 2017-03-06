import React, {Component} from 'react'

import { api } from '../utils/utils'
import { searchOn, searchOff } from '../events/events'
import Preloader from '../preloader/preloader'

import Categories from '../categories/categories'
import Tabs from '../tabs/tabs'

class Catalog extends Component {
	state = {
		data: []
	}
	_getPath(type, query) {

		switch (type){
		case 'search':
			return `catalog?search=${query}`
		case 'complex':
			return 'complex'
		case 'top':
			return 'top'
		case 'abc':
			return 'catalog?sorting=name'
		default:
			return 'catalog'
		}
	}
	_search = ({ detail: query }) => {
		this._getData('search', query)
	}
	_type = (type) => {
		console.log(type)
		this._getData(type)
	}
	_getData = (type, query) => {
		api(this._getPath(type, query))
			.then(data => {
				this.setState({
					data
				})
			})
	}
	componentWillUnmount() {
		searchOff(this._search)
	}
	componentWillMount() {
		searchOn(this._search)
		this._getData()
	}
	render() {
		const {
			data,
		} = this.state

		return (
			<div className="catalog">
				<Tabs
					changeType={this._type}
				/>
				{
					data.length > 0
						? (
							<Categories
								data={data}
							/>
						) : (
							<Preloader />
						)
				}
			</div>
		)
	}
}

export default Catalog
