const {lab1, lab2} = require('./labs')

lab1()

// lab2.ReadCSV('./data/premiere_2018-2019.csv', (result) => {})
// lab2.ReadCSV('./data/liverpoolPlayers.json',(result)=> {})

lab2.readFile('./data/premiere_2018-2019.csv')
  .then((premiere) => lab2.readFile('././data/liverpoolPlayers.json'))
  .then((liverpool) => console.log(liverpool))
  .catch(err => console.log(err))