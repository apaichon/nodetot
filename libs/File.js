let fs = require('fs')

class File {
  static ReadCSV(fileName) {
    fs.readFile(fileName, 'utf8', (err, data) => {
      if (err) throw err;
      console.log('-----Reading----', fileName)
      // console.log(data)
    });
  }
}

module.exports = File