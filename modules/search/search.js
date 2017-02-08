import React, {Component} from 'react'

import IconLoupe from '../icon/loupe'

class Search extends Component {
	render() {
		return (
			<from className="search">
				<input type="text" className="search__field" placeholder="найдите анализ" {...this.props} />
				<button className="search__button">
					<IconLoupe className="search__icon" />
				</button>
			</from>
		)
	}
}

export default Search
