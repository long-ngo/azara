const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect(process.env.ATLAS_URL);
    console.log('Connect successfully!!!');
  } catch (error) {
    console.log('Connect false!!!', error);
  }
}

module.exports = { connect };
