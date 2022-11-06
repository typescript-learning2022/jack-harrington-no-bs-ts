import {ILogger, ProductionLogger, DevelopmentLogger} from './43_abstract_factory';

let logger: ILogger ;
if(process.env.NODE_ENV == 'production') {
    logger = new ProductionLogger();
}else {
    logger = new DevelopmentLogger();
}

logger.info();
logger.debug();
logger.error();
logger.warn();