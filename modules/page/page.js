import React, {Component} from 'react'

import Header from '../header/header'
import Footer from '../footer/footer'

class Page extends Component {
	render() {
		const {
			children
		} = this.props
		return (
			<div className="page">
				<Header />
				<div className="page__content">
					{children}
				</div>
				<Footer />
			</div>
		)
	}
}

export default Page
