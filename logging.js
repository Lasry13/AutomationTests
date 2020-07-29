const winston = require('winston');
const path = require('path');
const config = require('./config.json')
const logger = winston.createLogger({
    transports: [
        new (winston.transports.File)({filename: path.join('logs', config.logs)}),
        new winston.transports.Console()
    ],
});

module.exports.logger = logger
