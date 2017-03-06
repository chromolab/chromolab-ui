import React, {Component} from 'react'

import { api } from '../utils/utils'
import Preloader from '../preloader/preloader'

import Discount from './discount'

class Discounts extends Component {
	state = {
		data: null
	}
	_getContent = () => {
		const {
			data: discounts
		} = this.state

		return (
			<div className="discoutns">
				{
					discounts.map((dicount, index) => (
						<Discount key={index} {...dicount} />
					))
				}
			</div>
		)
	}
	componentWillMount() {
		api('discounts')
			.then(data => {
				this.setState({
					data
				})
			})
	}
	render() {
		const { data } = this.state
		return data ? this._getContent() : <Preloader />
	}
}

export default Discounts
