const prms = require('./tasks/utils/prms')
const glob = prms(require('glob'))
const del = require('del')

glob('modules/!(g-|u-|b-)*')
	.then(paths => {
		paths.forEach(path => {
			del(path)
				.then(console.log)
		})
	})
