import React, {Component} from 'react'

class Tabs extends Component {
	render() {
		return (
			<div className="tabs">
				<span className="tabs__tab">Все</span>
				<span className="tabs__tab">Комплексы</span>
				<span className="tabs__tab">ТOP</span>
				<span className="tabs__tab">А-Я</span>
			</div>
		)
	}
}

export default Tabs
