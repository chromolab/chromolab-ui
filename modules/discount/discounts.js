import React, {Component} from 'react'

import Discount from './discount'

class Discounts extends Component {
	render() {
		const discounts = [{
			title: 'Скидка 10% ветеранам Великой Отечественной войны',
			text: 'Более 10 лет в области лабораторной медицины. Все эти годы мы рады помочь нашим клиентам сохранить и приумножить здоровье. \nМы хотим поблагодарить именно Вас за то, что Вы доверяете нам! Получите скидку 10% при заказе любых исследований в нашей лаборатории. \nЖдём вас в наших процедурных кабинетах.\nАкция действует с 01.11.2016\nПодробная информация по телефону: +7 (495) 51-043-51\n\nСпасибо за то, что вы выбираете лабораторию Chromolab!'
		},{
			title: 'Скидка 5% держателям социальной карты Москвича',
			text: 'Более 10 лет в области лабораторной медицины. Все эти годы мы рады помочь нашим клиентам сохранить и приумножить здоровье. \nМы хотим поблагодарить именно Вас за то, что Вы доверяете нам! Получите скидку 10% при заказе любых исследований в нашей лаборатории. \nЖдём вас в наших процедурных кабинетах.\nАкция действует с 01.11.2016\nПодробная информация по телефону: +7 (495) 51-043-51\n\nСпасибо за то, что вы выбираете лабораторию Chromolab!'
		}]
		return (
			<div className="discoutns">
				{
					discounts.map((dicount) => (
						<Discount {...dicount} />
					))
				}
			</div>
		)
	}
}

export default Discounts
