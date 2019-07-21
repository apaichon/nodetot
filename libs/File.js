let fs = require('fs')

class File {
  static ReadCSV(fileName, callback) {
    fs.readFile(fileName, 'utf8', (err, data) => {
      if (err) throw err;
      console.log('-----Reading----', fileName)
      callback(data)
    });
  }
}

module.exports = File