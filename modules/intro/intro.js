import React, {Component} from 'react'

import Search from '../search/search'

class Intro extends Component {
	render() {
		return (
			<div
				className="intro"
				style={{
					backgroundImage: 'url(http://placehold.alanev.ru/480x650.jpg)'
				}}
			>
				<h1 className="intro__title">Медицинский центр <br/>на Комсомольской</h1>
				<div className="intro__warn">СКОРО ОТКРЫТИЕ</div>
				<div className="intro__search">
					<Search />
				</div>
				<div className="intro__footer">Посетите сайт <br/><a href="http://medcentr.ru" className="intro__link">medcentr.ru</a></div>
				<button className="intro__button">Поиск по каталогу</button>
			</div>
		)
	}
}

export default Intro
