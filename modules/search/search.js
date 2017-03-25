import React, {Component} from 'react'
import debounce from 'lodash.debounce'

import { search } from '../events/events'

import IconLoupe from '../icon/loupe'

class Search extends Component {
	state = {
		value: ''
	}
	_input = ({ target: { value } }) => {
		this.setState({
			value
		})
		this._debouncedSearch()
	}
	_debouncedSearch = debounce(() => {
		this._search()
	}, 500)
	_search = () => {
		search(this.state.value)
	}
	render() {
		const {
			props: {
				focus = false,
				onFocus
			}
		} = this

		return (
			<from className="search">
				<input
					type="text"
					className="search__field"
					placeholder="найдите анализ"
					onChange={this._input}
					value={this.state.value}
					autoFocus={focus}
					onFocus={onFocus}
				/>
				<button className="search__button">
					<IconLoupe className="search__icon" />
				</button>
			</from>
		)
	}
}

export default Search
