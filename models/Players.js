const Sequelize = require('sequelize');
const MySql = require('../libs/MySql')

class Players extends Sequelize.Model {
  static async connect () {
    let connected = false;
    let sequelize = await MySql.Open();
    Players.init({
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      firstName: Sequelize.STRING,
      lastName: Sequelize.STRING,
      position: Sequelize.STRING,
      nationality: Sequelize.STRING,
      dateOfBirth: Sequelize.DATE,
      squadNumber: Sequelize.INTEGER
    }, {
      sequelize,
      modelName: 'players'
    });
    connected = true;
    return connected;
  }

  static async close() {
    let status = await MySql.Close();
    return status
  }
}

module.exports = Players