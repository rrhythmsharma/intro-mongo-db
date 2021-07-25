const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const connect = (url) => {
  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    poolSize: 10,
  });
};
module.exports = connect;
