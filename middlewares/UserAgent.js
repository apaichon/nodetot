const ua = require('useragent');

class UserAgent {

  static GetUAInfo (req) {
    let info = {}
    let agent = ua.parse(req.headers['user-agent'])
    
    info.uuid = req.uuid || ''
    info.sessionID = req.sessionID || ''
    info.ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
    info.application = req.headers.application || ''
    info.className = req.headers.objectname || ''
    info.method = req.headers.objectmethod || ''
    info.os = agent.os
    info.device = agent.device
    info.browser = agent.toString()
    info.level = 'info'
    
    return info
  }
}

module.exports = UserAgent;