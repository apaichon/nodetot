class Server {
  constructor (port = 3000) {
      this.PORT = port;
      const express = require('express');
      this.bodyParser = require('body-parser');
      this.app = new express();
      this.app.use(this.bodyParser.json());
      this.app.listen(this.PORT);
      console.log(`Service is running on port ${this.PORT}.`)
  }

  start () {
    this.app.listen(this.PORT);
    console.log(`Service is running on port ${this.PORT}.`)
  }

  use (object) {
    this.app.use(object)
  }
}
module.exports = Server;