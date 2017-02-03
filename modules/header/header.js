import React, {Component} from 'react'

import Menu from '../menu/menu'
import Img from '../img/img'

class Header extends Component {
	state = {
		menu: false
	}
	toggleMenu() {
		this.setState({
			menu: !this.state.menu
		})
	}
	render() {
		const {
			menu
		} = this.state

		return (
			<header className="header">
				<div className={`header__nav ${menu ? 'header__nav--menu' : ''}`}>
					<span className="header__user">
						<Img size="45" alt="" className="header__user-image"/>
					</span>
					<span className="header__icon">
						<Img size="47x28" />
					</span>
					<span className="header__menu">
						<span
							className={`header__menu-icon ${menu ? 'header__menu-icon--menu' : ''}`}
							onClick={::this.toggleMenu}
						>
							<span className="header__menu-line"></span>
							<span className="header__menu-line"></span>
							<span className="header__menu-line"></span>
						</span>
						<div className="header__menu-list">
							<Menu open={menu} />
						</div>
					</span>
				</div>
				<div className="header__logo">
					<Img size="272x38" />
				</div>
			</header>
		)
	}
}

export default Header
