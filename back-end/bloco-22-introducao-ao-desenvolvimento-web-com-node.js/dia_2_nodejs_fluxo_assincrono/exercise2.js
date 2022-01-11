const exercise1 = require('./exercise1.js');

const exercise2 = () => {
  exercise1(Math.floor(Math.random() * 100 + 1), Math.floor(Math.random() * 100 + 1), Math.floor(Math.random() * 100 + 1))
    .then(resolve => console.log(resolve))
    .catch(error => console.log(error));
}

module.exports = exercise2;