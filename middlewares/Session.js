const session = require('express-session');
const Session = session({
  secret: 'keyboard cat',
  cookie: { }
})

module.exports = Session