import React, {Component} from 'react'
import loadGoogleMapsAPI from 'load-google-maps-api'

import overlay from './overlay'
import { googleKey } from '../config/config'

const MapLatLng = {
	lng: 37.6,
	lat: 55.75
}
const mapStyles = [
	{
		'featureType': 'administrative',
		'elementType': 'all',
		'stylers': [
			{
				'visibility': 'on'
			},
			{
				'saturation': -100
			},
			{
				'lightness': 20
			}
		]
	},
	{
		'featureType': 'landscape.man_made',
		'elementType': 'all',
		'stylers': [
			{
				'visibility': 'simplified'
			},
			{
				'saturation': -60
			},
			{
				'lightness': 10
			}
		]
	},
	{
		'featureType': 'landscape.natural',
		'elementType': 'all',
		'stylers': [
			{
				'visibility': 'simplified'
			},
			{
				'saturation': -60
			},
			{
				'lightness': 60
			}
		]
	},
	{
		'featureType': 'poi',
		'elementType': 'all',
		'stylers': [
			{
				'visibility': 'off'
			},
			{
				'saturation': -100
			},
			{
				'lightness': 60
			}
		]
	},
	{
		'featureType': 'road',
		'elementType': 'all',
		'stylers': [
			{
				'visibility': 'on'
			},
			{
				'saturation': -100
			},
			{
				'lightness': 40
			}
		]
	},
	{
		'featureType': 'transit',
		'elementType': 'all',
		'stylers': [
			{
				'visibility': 'off'
			},
			{
				'saturation': -100
			},
			{
				'lightness': 60
			}
		]
	},
	{
		'featureType': 'water',
		'elementType': 'all',
		'stylers': [
			{
				'visibility': 'on'
			},
			{
				'saturation': -10
			},
			{
				'lightness': 30
			}
		]
	}
]
const places = [
	{
		position: {
			lng: 37.6,
			lat: 55.75
		},
		metro: 'м. Октябрьская',
		address: 'Калужская площадь д.1 стр.1',
		time: '10:00 - 20:00 \nСб.Вс. 9:00 - 17:00',
		id: 'id'
	}
]

class Contacts extends Component {
	_map() {
		loadGoogleMapsAPI({
			key: googleKey,
			language: 'ru'
		}).then(googleMaps => {
			const map =
				new googleMaps.Map(this.refs.map, {
					disableDefaultUI: true,
					center: MapLatLng,
					zoom: 12,
					backgroundColor: '#f4f4f4',
					styles: mapStyles
				})
			places.forEach(place => {
				const Overlay = overlay(googleMaps)
				new Overlay(map, place)
			})
		})
	}
	componentDidMount() {
		this._map()
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
