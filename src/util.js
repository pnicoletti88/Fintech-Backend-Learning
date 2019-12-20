const randomlyThrowError = () => {
  if (Math.random() >= 0.9) {
    throw new Error('Internal server error! Make sure I am caught :)');
  }
};

module.exports = { randomlyThrowError };
