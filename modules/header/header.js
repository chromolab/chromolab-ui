import React, {Component} from 'react'
import { Link } from 'react-router'

import Menu from '../menu/menu'
import IconUser from '../icon/user.svg'
import IconChromolabIcon from '../icon/chromolab-icon.svg'
import IconChromolabLogo from '../icon/chromolab-logo.svg'

class Header extends Component {
	state = {
		menu: false
	}
	toggleMenu() {
		this.setState({
			menu: !this.state.menu
		})
	}
	hide() {
		this.setState({
			menu: false
		})
	}
	render() {
		const {
			menu
		} = this.state

		return (
			<header className="header">
				<div className={`header__nav ${menu ? 'header__nav--menu' : ''}`}>
					<Link to="/login" className="header__user">
						<IconUser className="header__user-image" />
					</Link>
					<span className="header__icon">
						<IconChromolabIcon className="header__icon-logo" />
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
						<div className={`header__menu-list ${menu ? 'header__menu-list--menu' : ''}`}>
							<Menu hide={::this.hide} open={menu} />
						</div>
					</span>
				</div>
				<div className="header__logo">
					<IconChromolabLogo className="header__logo-icon" width="272" height="38" />
				</div>
			</header>
		)
	}
}

export default Header
