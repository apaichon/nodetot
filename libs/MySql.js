const Sequelize = require('sequelize');
const config = require('../config/appSettings.json');
const Cryptography = require('../libs/Cryptography');
let sequelize;

class MySql {
  constructor () {
    const { database , dbUser, dbPassword } = config;
    let mysql = this;
    Cryptography.Decrypt(dbPassword)
    .then(password => {
      mysql.db = new Sequelize(database, dbUser, password , {
        dialect: 'mysql'
      })
      console.log('open')
    })
  }

  static Open () {
    return new Promise((resolve, reject) => {
      const { database , dbUser, dbPassword } = config;
      Cryptography.Decrypt(dbPassword)
    .then(password => {
        sequelize = new Sequelize(database, dbUser, password , {
          dialect: 'mysql'
        })
        // sequelize = new Sequelize('mysql://root:Puppy%40139@localhost:3306/tot')
        resolve(sequelize)
      }).catch(err => reject(err))
    })
  }

  static Close () {
    return new Promise((resolve, reject)=> {
      sequelize.close()
        .then(status => resolve(status))
        .catch(err => reject(err))   
    })
  }
}

module.exports = MySql