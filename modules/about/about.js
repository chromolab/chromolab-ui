import React, {Component} from 'react'

import { api } from '../utils/utils'
import Preloader from '../preloader/preloader'

class About extends Component {
	state = {
		data: null
	}

	_getContent = () => {
		const {
			content
		} = this.state.data

		return (
			<div className="about">
				{content}
			</div>
		)
	}
	componentWillMount() {
		api('about')
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

export default About
