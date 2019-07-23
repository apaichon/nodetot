const { Server } = require('./middlewares')
const PlayersRouter = require('./routers/PlayersRouter')

const server = new Server()
server.use(PlayersRouter)