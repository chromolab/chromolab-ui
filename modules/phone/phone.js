import React, {Component} from 'react'

class Phone extends Component {
	render() {
		return (
			<a href="tel:(495)51-043-51" className="phone">
				<span className="phone__add">(495)</span>
				<span className="phone__number">51-043-51</span>
			</a>
		)
	}
}

export default Phone
