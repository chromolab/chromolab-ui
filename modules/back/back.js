import React, {Component} from 'react'

import IconCross from '../icon/cross.svg'

class Back extends Component {
	_back() {
		history.length > 1
			? this.props.router.goBack()
			: this.props.router.push('/')
	}
	render() {
		return (
			<div className="back" onClick={::this._back}>
				<IconCross className="back__icon" />
			</div>
		)
	}
}

export default Back
