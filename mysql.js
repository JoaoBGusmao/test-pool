const createPool = () => {
  console.log('Momento em que o pool foi criado:', new Date().toISOString());

  return `pool criado em ${new Date().toISOString()}`;
};

const pool = createPool({});

module.exports = pool;
