const Session = require('./Session')
const PlayersRouter = require('../routers/PlayersRouter')
const Logger = require('../libs/Logger')

class Server {
  constructor (port = 3000) {
      this.PORT = port;
      const express = require('express');
      this.bodyParser = require('body-parser');
      this.app = new express();
      this.app.use(this.bodyParser.json());
      this.app.use(Session);
      this.beforeRoute();
      this.app.use(PlayersRouter)
      this.afterRoute();
      this.app.listen(this.PORT);
    
      console.log(`Service is running on port ${this.PORT}.`)
  }

  beforeRoute () {
    this.app.all('*', (req, res, next) => {
      Logger.WriteReqLog(req, __basedir +'/logs');
      next();
    })
  }

  afterRoute () {
    this.app.use( (req, res, next) => {
      console.log('after route')
      Logger.WriteResLog(req,res.result, __basedir +'/logs');
      next();
    })
  }

  use (object) {
    this.app.use(object)
  }
}
module.exports = Server;