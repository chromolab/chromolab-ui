import React, {Component} from 'react'
import loadGoogleMapsAPI from 'load-google-maps-api'

import { googleKey } from '../config/config'

const MapLatLng = {
	lng: 37.6,
	lat: 55.75
}

class Contacts extends Component {
	componentDidMount() {
		loadGoogleMapsAPI({
			googleKey
		}).then(googleMaps => {
			new googleMaps.Map(this.refs.map, {
				disableDefaultUI: true,
				center: MapLatLng,
				zoom: 12,
				backgroundColor: '#f4f4f4'
			})
		})
	}
	render() {
		return (
			<div className="contacts">
				<div className="contacts__map" ref="map"></div>
			</div>
		)
	}
}

export default Contacts
