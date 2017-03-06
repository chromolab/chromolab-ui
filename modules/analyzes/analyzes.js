import React, {Component} from 'react'

import Analysis from '../analysis/analysis'

class Analyzes extends Component {
	render() {
		const {
			data,
		} = this.props

		return (
			<div className="analyzes">
			{
				data
				.map((analisis, index) => (
					<Analysis
						key={index}
						data={analisis}
						short
					/>
				))
			}
			</div>
		)
	}
}

export default Analyzes
