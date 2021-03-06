var express = require('express')
var path = require('path')
var favicon = require('serve-favicon')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var http = require('http')
var debug = require('debug')('werewolf-server:server')
var socketIO = require('socket.io')
var index = require('./routes/index')
var Routes = require('./endpoint-functions/socket-endpoints')

/**
 * Create HTTP server.
 */

var app = express()
var httpServer = http.createServer(app)
var wsServer = socketIO(httpServer)

// Websocket Code
wsServer.on('connect', socket => {
	console.log('Socket ID: ' + socket.id + ', Connected')
  socket.on('create-game', data => Routes.createGame(socket, data))
  // socket.on('enter-player',  data => Routes.createGame(socket, data))

  socket.on('disconnect', () => {
    console.log('Socket ID: ' + socket.id + ', Disconnected')
  })
})

// Express Code

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '8000')
app.set('port', port)

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
//app.use([path,] callback [, callback...])
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

/*
	Routes
*/
app.use('/', index)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10)

  if (isNaN(port)) {
    // named pipe
    return val
  }

  if (port >= 0) {
    // port number
    return port
  }

  return false
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges')
      process.exit(1)
      break
    case 'EADDRINUSE':
      console.error(bind + ' is already in use')
      process.exit(1)
      break
    default:
      throw error
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = httpServer.address()
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port
  debug('Listening on ' + bind)
}


/**
 * Listen on provided port, on all network interfaces.
 */

httpServer.listen(port)
httpServer.on('error', onError)
httpServer.on('listening', onListening)

module.exports = app
