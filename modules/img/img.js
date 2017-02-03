import React, {Component} from 'react'

class Img extends Component {
	render() {
		const {
			size,
			alt,
			className
		} = this.props
		const newProps = {
			src: `//placehold.alanev.ru/${size}.jpg`,
			alt,
			className
		}
		return (
			<img {...newProps} />
		)
	}
}

export default Img
