const mongoose = require('mongoose');
require('dotenv').config();
console.log("----------------------------------")
console.log(process.env.MONGODB_URI)

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/project_3',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;

// || 'mongodb://127.0.0.1:27017/project_3',