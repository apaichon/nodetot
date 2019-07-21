let fs = require('fs')

class File {
  static ReadCSV(fileName, callback) {
    fs.readFile(fileName, 'utf8', (err, data) => {
      if (err) throw err;
      console.log('-----Reading----', fileName)
      callback(data)
    });
  }
  static readFile(fileName) {
    return new Promise((resolve, reject) => {
      fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) reject(err);
        console.log('-----Reading----', fileName)
        resolve(data)
      });
    })
  }

  static async readFileAsync (fileName) {
    return await File.readFile(fileName);
  }

  
}

module.exports = File