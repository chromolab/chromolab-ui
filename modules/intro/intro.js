import React, {Component} from 'react'
import { Link } from 'react-router'

import { api } from '../utils/utils'
import Preloader from '../preloader/preloader'

import Search from '../search/search'

class Intro extends Component {
	state = {
		data: null
	}
	_focus = () => {
		this.props.router.push('/catalog?focus=true')
	}
	_getContent = () => {
		const {
			image,
			title,
			warn,
			note,
			link,
		} = this.state.data

		return (
			<div
				className="intro"
				style={{
					backgroundImage: `url(${image})`
				}}
			>
				<h1 className="intro__title">{title}</h1>
				<div className="intro__warn">{warn}</div>
				<div className="intro__search">
					<Search onFocus={this._focus} />
				</div>
				<div className="intro__footer">{note} <br/><a href={link.href} className="intro__link">{link.text}</a></div>
				<Link to="/catalog" className="intro__button">Поиск по каталогу</Link>
			</div>
		)
	}
	componentWillMount() {
		api('intro')
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

export default Intro
