import React, {Component} from 'react'
import { Link } from 'react-router'

import IconArrow from '../icon/arrow.svg'

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
	toggleText() {
		this.setState({
			fullText: !this.state.fullText
		})
	}
	render() {
		const {
			state: {
				fullText,
				added,
			},
			props: {
				short
			}
		} = this

		return (
			<div className="analysis">
				{
					short
						? (
							<Link
								to="/catalog/code"
								className="analysis__title"
							>Профиль "Стресс и гормоны надпочечников"</Link>
						)
						: (
							<div className="analysis__title">Профиль "Стресс и гормоны надпочечников"</div>
						)
				}
				<div className="analysis__info">
					<span className="analysis__code">gs-1</span>
					<span className="analysis__time">4 дн.</span>
					<span className="analysis__price">2 592</span>
					<button
						className={`analysis__button ${added ? 'analysis__button--added' : 'analysis__button--removed' }`}
						onClick={::this.cart}
					></button>
				</div>
				{
					!short
						? (
							<div className="analysis__content">
								<div className={`analysis__text ${fullText ? 'analysis__text--open' : 'analysis__text--close'}`}>
									Своих щеке несколько переписали одна повстречался имени букв над. Пояс дороге себя строчка парадигматическая, гор грамматики рекламных, рот инициал не языком семь букв. Текстов инициал живет большой наш, он языкового.
										Диких строчка жаренные переписывается решила что города заглавных сих рукописи продолжил страну, заголовок подзаголовок пунктуация рот буквоград раз семантика приставка, возвращайся рукопись, вершину от всех. Текст, выйти своих своего его переписывается.
										Парадигматическая путь маленький то живет злых до его родного эта решила о моей рот города, возвращайся безопасную заголовок рыбными раз она, пояс великий переписали силуэт продолжил. Несколько, решила, буквенных. Всеми.
								</div>
								<div
									className="analysis__more"
									onClick={::this.toggleText}
								>Подробнее</div>
								<div className="analysis__footer">
									<div className="analysis__tab">
										<div className="analysis__tab-title">
											Аналиты
											<IconArrow className="analysis__tab-arrow" />
										</div>
										<div className="analysis__tab-content">Снова текст все имени коварный собрал она составитель своего прямо свой языком маленькая предложения вершину послушавшись снова, ему семь? Собрал своих агенство букв, повстречался реторический страну что своего мир оксмокс.</div>
									</div>
									<div className="analysis__tab">
										<div className="analysis__tab-title">
											Как подготовиться
											<IconArrow className="analysis__tab-arrow" />
										</div>
										<div className="analysis__tab-content">Снова текст все имени коварный собрал она составитель своего прямо свой языком маленькая предложения вершину послушавшись снова, ему семь? Собрал своих агенство букв, повстречался реторический страну что своего мир оксмокс.</div>
									</div>
									<div className="analysis__tab">
										<div className="analysis__tab-title">
											С этим анализом заказывают
											<IconArrow className="analysis__tab-arrow" />
										</div>
										<div className="analysis__tab-content">Снова текст все имени коварный собрал она составитель своего прямо свой языком маленькая предложения вершину послушавшись снова, ему семь? Собрал своих агенство букв, повстречался реторический страну что своего мир оксмокс.</div>
									</div>
								</div>
							</div>
						)
						: null
				}
			</div>
		)
	}
}

export default Analysis
