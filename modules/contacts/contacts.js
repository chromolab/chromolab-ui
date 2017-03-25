import React, {Component} from 'react'
import loadGoogleMapsAPI from 'load-google-maps-api'

import { api } from '../utils/utils'
import Preloader from '../preloader/preloader'

import mapStyles from './contacts.style'
import overlay from './overlay'
import { googleKey } from '../config/config'

const MapLatLng = {
	lng: 37.6,
	lat: 55.75
}

class Contacts extends Component {
	state = {
		data: null
	}
	_load() {
		loadGoogleMapsAPI({
			key: googleKey,
			language: 'ru'
		}).then(googleMaps => {
			this._map(googleMaps)
		})
	}
	_map = googleMaps => {
		const {
			data: places
		} = this.state

		const map =
			new googleMaps.Map(this.refs.map, {
				disableDefaultUI: true,
				center: MapLatLng,
				zoom: 10,
				backgroundColor: '#f4f4f4',
				styles: mapStyles
			})
		places.forEach((place, index) => {
			const Overlay = overlay(googleMaps)
			place.id = index
			new Overlay(map, place)
		})
	}
	_getContent = () => {
		this._load()
		return (
			<div className="contacts">
				<div className="contacts__map" ref="map"></div>
			</div>
		)
	}
	componentWillMount() {
		api('contacts')
			.then(data => {
				this.setState({
					data
				})
			})
	}
	render() {
		const { data } = this.state
		return data ? this._getContent() : <Preloader />
	}
}

export default Contacts
