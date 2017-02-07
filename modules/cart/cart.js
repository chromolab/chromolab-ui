import React, {Component} from 'react'

import Extra from '../extra/extra'
import Social from '../social/social'
import Analyzes from '../analyzes/analyzes'

import IconCoins from '../icon/coins.svg'

class Cart extends Component {
	render() {
		return (
			<div className="cart">
				<div className="cart__empty">Пока пусто</div>
				<div className="cart__content">
					<Analyzes />
					<div className="cart__title">Дополнительно</div>
					<div className="cart__extra">
						<Extra />
					</div>
					<div className="cart__total">
						Итого
						<span className="cart__total-sum">15 849</span>
					</div>
					<button className="cart__pay">
						<IconCoins className="cart__coins" />
						Оплатить
					</button>
				</div>
				<div className="cart__footer">
					<div className="cart__email"></div>
					<div className="cart__social">
						<Social />
					</div>
				</div>
				<div className="cart__exit">
					<a href="#" className="cart__link">Выйти</a>
				</div>
			</div>
		)
	}
}

export default Cart
