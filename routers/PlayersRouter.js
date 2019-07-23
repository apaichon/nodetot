const RootUrl = '/players';
const Players = require('../models/Players')
let router = require('express').Router();

let create = async (req, res) => {
  try {
    let connected  = await Players.connect();
    let result = await Players.create(req.body);
    let closed = await Players.close();
    res.send(result)
  } catch (err) {
    res.status(500).send(err)
  }
}

let find = async (req, res) => {
  try {
    const connected  = await Players.connect();
    const query = req.query
    let result;
    if (!query) {
     result = await Players.findAll();
    } else {
      result = await Players.findAll({where:query});
    }
    const closed = await Players.close();
    res.send(result)
  } catch (err) {
    res.status(500).send(err)
  }
}

let update = async (req, res) => {
  try {
    const connected  = await Players.connect();
    const {data, where} = req.body
    const result = await Players.update(data, {where});
    const closed = await Players.close();
    res.send(result)
  } catch (err) {
    res.status(500).send(err)
  }
}

let remove = async (req, res) => {
  try {
    const connected  = await Players.connect();
    const result = await Players.destroy({ where: req.body });
    const closed = await Players.close();
    console.log('delete', result)
    res.send({total:result})
  } catch (err) {
    res.status(500).send(err)
  }
}

router.post(RootUrl, (req, res) => {
 create(req, res)
}) 
router.get(RootUrl, (req, res) => {
  find(req, res)
})
router.put(RootUrl, (req, res) => {
  update(req, res)
})
router.delete(RootUrl, (req, res) => {
  remove(req, res)
})

module.exports = router;