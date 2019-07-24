const Random = require('../libs/Random')
const Players = require('../models/Players')
const PlayerList = require('../data/liverpoolPlayers.json')
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;
const index = Random.random(0,10);
const playerInfo = PlayerList[index];

describe('Scenario CRUD of Players REST Api', () => {
  describe(`Given Player name is ${playerInfo.firstName}`, () => {
    it(`When add a player name is ${playerInfo.firstName}`, async () => {
    let result = await chai.request('http://localhost:3000')
      .post('/players')
      .set('content-Type', 'application/json')
      .send(playerInfo);
      // Then
      assert.equal(result.body.firstName, playerInfo.firstName);
    })
  })
})
