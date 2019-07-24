const Random = require('../libs/Random')
const Players = require('../models/Players')
const PlayerList = require('../data/liverpoolPlayers.json')
const chai = require('chai');
let assert = chai.assert;

let index = Random.random(0,10);
let playerInfo = PlayerList[index];

describe('Players', () => {
  
  describe('Insert a player', () => {
    it(`should return ${playerInfo.firstName}`,async () => {
      let connected = await Players.connect();
      let result = await Players.create(playerInfo);
      let closed = await Players.close();
      assert.equal(result.firstName, playerInfo.firstName);
    })
  })

  const setLastName = 'Alison'
  describe('Find a player', () => {
    it(`should return ${setLastName}`,async () => {
      let connected = await Players.connect();
      let result = await Players.findAll({
        where: {
          lastName: setLastName
        }
      });
      let closed = await Players.close();
      assert.equal(result[0].lastName, setLastName);
    })
  })

  describe('Update a player', () => {
    it(`should return > 0 `,async () => {
      let connected = await Players.connect();
      let result = await Players.update({firstName: setLastName},
        {
          where: {
          firstName: playerInfo.firstName
        }
      });
      let closed = await Players.close();
      assert.isAbove(result[0], 0);
    })
  })

  describe('Delete a player', () => {
    it(`should return > 0 `,async () => {
      let connected = await Players.connect();
      let result = await Players.destroy({
          where: {
          firstName: setLastName
        }
      });
      let closed = await Players.close();
      assert.isAbove(result, 0);
    })
  })

})
