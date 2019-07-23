const bcrypt = require('bcrypt');
const crypto = require('crypto');

const saltRounds = 10;
const algorithm = 'aes-256-ctr';
const os = require('os');

class Cryptography {
  static Hash (plaintext) {
    return new Promise((resolve, reject) => {
      bcrypt.genSalt(saltRounds, function(err, salt) {
        if (err) reject(err)
        bcrypt.hash(plaintext, salt, function(err, hash) {
          if (err) reject(err)
          resolve(hash)
        });
      });
    })
  }

  static Compare (plaintext, hash) {
    return new Promise((resolve, reject) => {
      bcrypt.compare(plaintext, hash, function(err, res) {
        if (err) reject(err)
        resolve(res)
      })
    })
  }

  static Encrypt (plaintext) {
    return new Promise((resolve, reject) => {
      try {
        var cipher = crypto.createCipher(algorithm, os.hostname())
        var crypted = cipher.update(plaintext,'utf8','hex')
        crypted += cipher.final('hex');
        resolve(crypted);
      } catch(err) {
        reject(err)
      }
    });
  }

  static Decrypt (plaintext) {
    return new Promise((resolve, reject) => {
      try {
        let decipher = crypto.createDecipher(algorithm, os.hostname())
        let dec = decipher.update(plaintext,'hex','utf8')
        dec += decipher.final('utf8');
        resolve(dec);
      } catch(err) {
        reject(err)
      }
      
    })
  }
}

module.exports = Cryptography
