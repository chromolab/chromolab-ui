import React, {Component} from 'react'
import { Link } from 'react-router'

import IconArrow from '../icon/arrow.svg'

class Analysis extends Component {
	state = {
		open: false,
		fullText: false,
		added: false
	}
	cart = () => {
		this.setState({
			added: !this.state.added
		})
	}
	toggleText = () => {
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
				short,
				data
			}
		} = this

		return (
			<div className="analysis">
				{
					short
						? (
							<Link
								to={`/catalog/${data.id}`}
								className="analysis__title"
							>{data.name}</Link>
						)
						: (
							<div className="analysis__title">{data.name}</div>
						)
				}
				<div className="analysis__info">
					<span className="analysis__code">{data.code}</span>
					<span className="analysis__time">{data.duration} дн.</span>
					<span className="analysis__price">{data.price}</span>
					<button
						className={`analysis__button ${added ? 'analysis__button--added' : 'analysis__button--removed' }`}
						onClick={this.cart}
					></button>
				</div>
				{
					!short
						? (
							<div className="analysis__content">
								<div className={`analysis__text ${fullText ? 'analysis__text--open' : 'analysis__text--close'}`}>
									{data.description}
								</div>
								<div
									className="analysis__more"
									onClick={this.toggleText}
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
