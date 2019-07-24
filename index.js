const { Server } = require('./middlewares')
global.__basedir = __dirname;
const server = new Server()
