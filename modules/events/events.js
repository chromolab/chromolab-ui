export const events = document.createElement('div')

export const search = query => {
	const event = new CustomEvent(
		'search',
		{
			'detail': query
		}
	)
	events.dispatchEvent(event)
}

export const searchOn = (cb) => {
	events.addEventListener('search', cb)
}

export const searchOff = (cb) => {
	events.removeEventListener('search', cb)
}
