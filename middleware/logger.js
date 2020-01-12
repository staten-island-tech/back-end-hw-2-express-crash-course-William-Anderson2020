const moment = require('moment');

const logger = (req, res, next) => { //build middleware
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl} accessed @ ${moment().format()}`);
    next();
}

module.exports = logger;