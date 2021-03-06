const browserSync = require('browser-sync').create()
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var historyAPI = require('connect-history-api-fallback')

var webpackConfig = require('../webpack.config')
var bundler = webpack(webpackConfig)

module.exports = () => {
	browserSync.init({
		server: 'build',
		middleware: [
			webpackDevMiddleware(bundler, {
				publicPath: webpackConfig.output.publicPath,
				stats: {
					colors: true
				}
			}),
			webpackHotMiddleware(bundler),
			historyAPI()
		],
		files: [
			'build/*.html',
			'build/*.css'
		]
	})
}
