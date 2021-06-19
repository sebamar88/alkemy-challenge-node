const ExpressServer = require('./server/expressServer');
const sequelize = require('./sequelize');
const config = require('../config');
const logger = require('./logger');

module.exports = async () => {

  
  try {
    await sequelize.authenticate();
    logger.info('DB loaded and connected'); 
    //sequelize.sync({alter:true});
    sequelize.sync();
    const server = new ExpressServer();
    logger.info('Express Loaded');

    server.start();
    logger.info(`#######################################
      Server listening on port: ${config.port}
      #######################################
    `);
    } catch(error){
        console.log('No se ha podido contectar la base de datos:', error);
    } 

}
