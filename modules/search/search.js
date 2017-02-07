import React, {Component} from 'react'

import IconLoupe from '../icon/loupe'

class Search extends Component {
	render() {
		return (
			<from className="search">
				<input type="text" className="seach__field" placeholder="найдите анализ" />
				<button className="search__button">
					<IconLoupe className="search__icon" />
				</button>
			</from>
		)
	}
}

export default Search
