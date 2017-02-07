import React, {Component} from 'react'

class Analysis extends Component {
	state = {
		open: false,
		fullText: false,
		added: false
	}
	cart() {
		this.setState({
			added: !this.state.added
		})
	}
	toggleView() {
		this.setState({
			open: !this.state.open
		})
	}
	toggleText() {
		this.setState({
			fullText: !this.state.fullText
		})
	}
	render() {
		const {
			open,
			fullText,
			added
		} = this.state

		return (
			<div className={`analysis ${open ? 'analysis--open' : 'analysis--close'}`}>
				<div
					className="analysis__title"
					onClick={::this.toggleView}
				>Профиль "Стресс и гормоны надпочечников"</div>
				<div className="analysis__info">
					<span className="analysis__code">gs-1</span>
					<span className="analysis__time">4 дн.</span>
					<span className="analysis__price">2 592</span>
					<button
						className={`analysis__button ${added ? 'analysis__button--added' : 'analysis__button--removed' }`}
						onClick={::this.cart}
					></button>
				</div>
				<div className="analysis__text">
					Своих щеке несколько переписали одна повстречался имени букв над. Пояс дороге себя строчка парадигматическая, гор грамматики рекламных, рот инициал не языком семь букв. Текстов инициал живет большой наш, он языкового.
					<div className={`analysis__full ${fullText ? 'analysis__full--open' : 'analysis__full--close'}`}>
						Диких строчка жаренные переписывается решила что города заглавных сих рукописи продолжил страну, заголовок подзаголовок пунктуация рот буквоград раз семантика приставка, возвращайся рукопись, вершину от всех. Текст, выйти своих своего его переписывается.
						Парадигматическая путь маленький то живет злых до его родного эта решила о моей рот города, возвращайся безопасную заголовок рыбными раз она, пояс великий переписали силуэт продолжил. Несколько, решила, буквенных. Всеми.
					</div>
					<span
						className="analysis__more"
						onClick={::this.toggleText}
					></span>
				</div>
			</div>
		)
	}
}

export default Analysis
