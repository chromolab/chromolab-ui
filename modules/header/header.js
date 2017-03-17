import React, {Component} from 'react'
import { Link } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import { trs } from '../config/config.props'

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
				catalog,
				focus,
			}
		} = this

		return (
			<header className={`header ${menu ? 'header--menu' : ''}`}>
				<Minicart />
				<div className="header__nav">
					<Link to="/login" onClick={::this.hide} className="header__user">
						<IconUser className="header__user-image" />
					</Link>
					<Link to="/" onClick={::this.hide} className="header__icon">
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
				<ReactCSSTransitionGroup
					component="div"
					className="header__footer"
					transitionName="header__footer"
					transitionEnterTimeout={trs}
					transitionLeaveTimeout={trs}
				>
					{
						catalog
							? (
								<div key={catalog} className="header__search">
									<Search focus={focus} />
								</div>
							)
							: (
								<Link key={catalog} to="/" className="header__logo">
									<IconChromolabLogo className="header__logo-icon" width="272" height="38" />
								</Link>
							)
					}
				</ReactCSSTransitionGroup>
			</header>
		)
	}
}

export default Header
