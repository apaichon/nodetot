// Members
const EventEmitter = require('events');
const Random = require('../libs/Random');
const statuses = ['available', 'not ready', 'injuried'];
let _status, _condition, _speed;

// Class Define
class Player {
  // Constructor is initiate function when start to create object
  constructor (aPlayer) {
    this.init(aPlayer);
    this.events = new EventEmitter();
    // on event is happened.
    this.events.on('afterShooted', () => {
      console.log ('after Shooted')
    })
  }

  // read only properties
  get condition () { return _condition; }
  get status () { return _status; }
  get speed () { return _speed; }
  set speed (s) { _speed = s;}

  // function of class
  init (aPlayer) {
    const {
      squadNumber,
      firstName,
      lastName,
      position,
    } = aPlayer;

    Object.defineProperty(this, 'lastName', {
      value: lastName,
      writable: false
    });

    Object.defineProperty(this, 'firstName', {
      value: firstName,
      writable: false
    });

    Object.defineProperty(this, 'squadNumber', {
      value: squadNumber,
      writable: false
    });

    Object.defineProperty(this, 'position', {
      value: position,
      writable: false
    });

    this.fitness();
  }

  shooting () {
    this.events.emit('afterShooted');
  }

  fitness (overall) {
    _condition = (overall?overall:Random.random(50, 100));
    _status = statuses[0];

    if (_condition < 70) {
      _status = statuses[2];
    } else if (_condition <90) {
      _status = statuses[1];
    }
  }

  setSpeed(s =99) {
    _speed = s
  }
  

}

// allow external file reuse this class.
module.exports = Player