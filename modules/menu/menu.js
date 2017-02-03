import React, {Component} from 'react'
import { Link } from 'react-router'

class Menu extends Component {
	render() {
		return (
			<div className="menu">
				<Link to="/search" className="menu__link">Поиск анализов</Link>
				<Link to="/catalog" className="menu__link">Каталог анализов</Link>
				<Link to="/cart" className="menu__link">Корзина</Link>
				<Link to="/map" className="menu__link">Где сдать</Link>
				<Link to="/about" className="menu__link">О хромолаб</Link>
				<Link to="/discounts" className="menu__link">Акции и скидки</Link>
			</div>
		)
	}
}

export default Menu
