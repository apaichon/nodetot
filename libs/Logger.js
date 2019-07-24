const { createLogger, transports } = require('winston');
const UserAgent = require('../middlewares/UserAgent');
const uuidv4 = require('uuid/v4');

class Logger {
  static PrepareLogger (path) {
    let now = new Date()
    let fileDate = now.toISOString().substring(0,10)
    let fileName = `${path}/${fileDate}.log`
    return createLogger({
      level: 'info',
      transports: [
        //
        // - Write to all logs with level `info` and below to `combined.log` 
        // - Write all logs error (and below) to `error.log`.
        //
        new transports.File({ filename: fileName }),
        new transports.Console()
      ]
    })
  }

  static WriteReqLog (req, logPath) {
    let log = UserAgent.GetUAInfo(req)
    log.uuid = uuidv4()
    log.sessionID = req.sessionID
    log.transType = 'input'
    log.timestamp = new Date().getTime();
    req.log = log
    req.logPath = logPath
    Logger.WriteLog(req.log, req.logPath)
  }

  static WriteResLog (req, result, logPath) {
    let { code, status, message } = result
    let level = (code === 200 ? 'info' : 'error')
    let log = {}
    log.uuid = req.log.uuid
    log.sessionID = req.sessionID
    log.code = code
    log.status = status
    log.message = message || ''
    log.result = result
    log.transType = 'output'
    log.level = level
    log.timestamp = new Date().getTime();
    Logger.WriteLog(log, logPath)
  }

  static WriteLog (log, path) {
    return new Promise((resolve, reject) => {
      try {
        let logger = Logger.PrepareLogger(path);
        logger.log(log.level, log);
        resolve(true);
      }
      catch(err) {
        reject(err);
      }
    })
    
  }

}

module.exports = Logger;