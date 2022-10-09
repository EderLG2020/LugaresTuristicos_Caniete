const bcrypt = require("bcryptjs");

async function encrypPass(password) {
  const salto = await bcrypt.genSalt(5);
  return await bcrypt.hash(password, salto);
}

async function mathPass(password, otro) {
  return await bcrypt.compare(password, otro);
}

module.exports = {
  encrypPass,
  mathPass,
};
