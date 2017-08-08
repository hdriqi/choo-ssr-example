import routes from './routes.js'

const app = routes

window.onload = function() {
	app.mount('div#root')
}