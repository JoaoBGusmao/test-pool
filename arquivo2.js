const pool = require('./mysql');

module.exports = (req, res) => {
  console.log('pool 2', pool);

  res.send('Ok 2');
};
