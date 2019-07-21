const {lab1, lab2} = require('./labs')

lab1()

lab2.ReadCSV('./data/premiere_2018-2019.csv', (result) => {})
lab2.ReadCSV('./data/liverpoolPlayers.json',(result)=> {})
