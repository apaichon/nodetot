class Server {
  constructor (port = 3000) {
      this.PORT = port;
      const express = require('express');
      this.bodyParser = require('body-parser');

      this.app = new express();
      this.app.use(this.bodyParser.json());
      this.app.listen(this.PORT);
      this.app.get('/', (req, res) => { res.send('Hello World') });
      console.log(`Service is running on port ${this.PORT}.`)
  }
}
module.exports = Server;