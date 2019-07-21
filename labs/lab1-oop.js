// OOP ,const, module
const Player = require('../models/Player') ;

// constructor and JSON
const salah = new Player({
  'firstName': 'Mohamed',
  'lastName': 'Salah',
  'squadNumber': 11,
  'position': 'Forward'
});

const run = () => {
  // function and events
  salah.shooting()
  // members
  salah.setSpeed()
  console.log(salah.condition, salah.speed)

}

/* Old fashion
function run () {

}
*/

module.exports = run
