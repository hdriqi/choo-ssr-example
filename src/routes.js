var html = require('choo/html')
var choo = require('choo')

var app = choo()
app.route('/', mainView)
app.route('/about', aboutView)
app.route('*', notFoundView)

function mainView (state, emit) {
  return html`
    <div>
      <h1>Hello ${state.topic}</h1>
      <a href="/about">About</a>
      <a href="/404_not_found">Test 404</a>
    </div>
  `
}

function aboutView (state, emit) {
  return html`
    <div>
      <h1>About ${state.topic}</h1>
      <a href="/">Main</a>
      <a href="/404_not_found">Test 404</a>
    </div>
  `
}

function notFoundView (state, emit) {
  return html`
    <div>
      <h1>404 Not Found</h1>
      <a href="/">Back to Main</a>
    </div>
  `
}

module.exports = app