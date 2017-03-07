import React, {Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import { trs } from '../config/config.props'

import Back from '../back/back'
import Header from '../header/header'
import Footer from '../footer/footer'

const titles = {
	about: 'О Хромолаб',
	discounts: 'Акции',
	login: 'Войти',
	reg: 'Регистрация',
	question: 'Задать вопрос специалисту',
	callback: 'Обратный звонок',
	forget: 'Забыли пароль?',
	cart: 'Моя корзина',
	contacts: 'Где сдать'
}
const backs = ['callback', 'login', 'reg', 'forget', 'question', 'contacts']

class Page extends Component {
	render() {
		const {
			children,
			location: {
				pathname,
				query
			}
		} = this.props

		const paths = pathname.split('/')
		const page = paths[1] || 'root'
		const innerPage = paths[2] || null
		const title = titles[page] || ''
		const isBack = backs.some(back => page == back)

		return (
			<div className="page">
				<Header
					catalog={page == 'catalog'}
					focus={query && query.focus}
				/>
				<ReactCSSTransitionGroup
					component="div"
					className="page__main"
					transitionName="page__main"
					transitionEnterTimeout={trs}
					transitionLeaveTimeout={trs}
				>
					<div
						className="page__content"
						key={page}
					>
						{
							isBack
								? (
									<div className="page__back">
										<Back router={this.props.router} />
									</div>
								)
								: null
						}
						{
							title && !innerPage
								? (
									<h1 className="page__title">{title}</h1>
								)
								: null
						}
						<div className="page__section">{children}</div>
					</div>
				</ReactCSSTransitionGroup>
				<Footer />
			</div>
		)
	}
}

export default Page
