const server = require('./config/server')
require('./config/database')
require('./itens/partsService')(server);
require('./sets/setsService')(server);