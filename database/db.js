const mongoose = require('mongoose');
const configs = require('../configs');

mongoose.Promise = Promise;

const dbs = configs.DB_SETTINGS;
module.exports = mongoose.createConnection(`mongodb://${dbs.USERNAME}:${dbs.PASSWORD}@ds119736.mlab.com:19736/${dbs.NAME}`);
