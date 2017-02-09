import React, {Component} from 'react'
import { Link } from 'react-router'

class Menu extends Component {
	render() {
		const {
			hide,
			open
		} = this.props
		return (
			<div className={`menu ${open ? 'menu--open' : ''}`}>
				<Link to="/catalog" onClick={hide} className="menu__link">Поиск анализов</Link>
				<Link to="/catalog" onClick={hide} className="menu__link">Каталог анализов</Link>
				<Link to="/cart" onClick={hide} className="menu__link">Корзина</Link>
				<Link to="/map" onClick={hide} className="menu__link">Где сдать</Link>
				<Link to="/about" onClick={hide} className="menu__link">О хромолаб</Link>
				<Link to="/discounts" onClick={hide} className="menu__link">Акции и скидки</Link>
			</div>
		)
	}
}

export default Menu
