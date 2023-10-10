const pool = require('./mysql');

module.exports = (req, res) => {
  console.log('pool 3', pool);

  res.send('Ok 3');
};
