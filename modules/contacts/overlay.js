

export default function (googleMaps) {

	return class Overlay extends googleMaps.OverlayView {
		constructor(map, data) {
			super()
			this.coords = new googleMaps.LatLng(data.latitude, data.longitude)
			this.map = map
			this.div = null
			this.tmpl =
				`
				<div class="contacts-info">
					<svg class="contacts-info__marker" viewBox="0 0 109.425 145.884">
						<linearGradient id="icon-marker-a" x1="54.688" x2="54.8" y1="14.046" y2="116.449" gradientUnits="userSpaceOnUse">
						<stop offset="0" stop-color="#E31E70"/>
						<stop offset="1" stop-color="#452F8A"/>
						</linearGradient>
						<path fill="url(#icon-marker-a)" d="M107.917 54.185c0 12.31-5.403 25.193-12.424 34.207-9.732 12.494-40.76 57.492-40.76 57.492S26.754 104.91 17.124 91.792c-8.055-10.97-15.58-22.92-15.58-37.607C1.546 24.81 25.36 1 54.733 1s53.185 23.81 53.185 53.185z"/>
						<path fill="#FFF" d="M54.732 84.538c-17.645 0-32-14.355-32-32s14.355-32 32-32 32 14.355 32 32-14.356 32-32 32zm0-54c-12.13 0-22 9.87-22 22s9.87 22 22 22 22-9.87 22-22-9.87-22-22-22z"/>
					</svg>
					<div class="contacts-info__content">
						<div class="contacts-info__info">
							<div class="contacts-info__metro">${data.metro}</div>
							<div class="contacts-info__address">${data.address}</div>
							<div class="contacts-info__time">${data.time}</div>
							<a href="#/contacts/${data.id}" class="contacts-info__link">Как проехать</a>
						</div>
					</div>
				</div>
				`

			this.setMap(map)
		}
		onAdd() {
			const div = document.createElement('div')
			Object.assign(div.style, {
				position: 'absolute'
			})
			div.innerHTML = this.tmpl
			this.div = div
			const panes = this.getPanes()
			panes.overlayLayer.appendChild(div)

			googleMaps.event.addDomListener(
				this.div.querySelector('.contacts-info__marker'),
				'click',
				() => {
					const coords = this.getProjection().fromLatLngToContainerPixel(this.coords)
					coords.x += 115
					coords.y += 10
					const newCoords = this.getProjection().fromContainerPixelToLatLng(coords)

					this.div.querySelector('.contacts-info').classList.toggle('_open')
					this.map.panTo(newCoords)
				}
			)
		}
		draw() {
			const overlayProjection = this.getProjection()
			const sw = overlayProjection.fromLatLngToDivPixel(this.coords)
			Object.assign(this.div.style, {
				position: 'absolute',
				left: `${sw.x - 34}px`,
				top: `${sw.y - 55}px`,
				width: '320px',
				height: '130px'
			})
		}
		onRemove() {
			this.div.parentNode.removeChild(this.div)
			this.div = null
		}
	}
}
