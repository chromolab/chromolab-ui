import React, {Component} from 'react'
import { Link } from 'react-router'

import Menu from '../menu/menu'
import Search from '../search/search'
import Minicart from '../minicart/minicart'

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
			state: {
				menu
			},
			props: {
				catalog
			}
		} = this

		return (
			<header className={`header ${menu ? 'header--menu' : ''}`}>
				<Minicart />
				<div className="header__nav">
					<Link to="/login" className="header__user">
						<IconUser className="header__user-image" />
					</Link>
					<Link to="/" className="header__icon">
						<IconChromolabIcon className="header__icon-logo" />
					</Link>
					<span className="header__menu">
						<span
							className="header__menu-icon"
							onClick={::this.toggleMenu}
						>
							<span className="header__menu-line"></span>
							<span className="header__menu-line"></span>
							<span className="header__menu-line"></span>
						</span>
						<div className="header__menu-list">
							<Menu hide={::this.hide} open={menu} />
						</div>
					</span>
				</div>
				<div className="header__footer">
					{
						catalog
							? (
								<Search />
							)
							: (
								<Link to="/">
									<IconChromolabLogo className="header__logo-icon" width="272" height="38" />
								</Link>
							)
					}
				</div>
			</header>
		)
	}
}

export default Header
