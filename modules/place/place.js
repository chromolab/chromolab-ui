import React, {Component} from 'react'

import { api } from '../utils/utils'
import Preloader from '../preloader/preloader'

class Place extends Component {
	state = {
		data: null
	}
	_getContent = () => {
		const {
			metro,
			address,
			time,
			driveway,
		} = this.state.data[this.props.params.id]

		return (
			<div className="place">
				<div className="place__metro">{metro}</div>
				<address className="place__address">{address}</address>
				<div className="place__time">{time}</div>
				<div className="place__text">{driveway}</div>
			</div>
		)
	}
	componentWillMount() {
		api('contacts')
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

export default Place
