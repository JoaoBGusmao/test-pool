const pool = require('./mysql');

module.exports = (req, res) => {
  console.log('pool 1', pool);

  res.send('Ok 1');
};
