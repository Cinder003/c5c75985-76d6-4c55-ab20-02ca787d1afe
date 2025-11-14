import pino from 'pino';
import appConfig from '../config/app.config';

const logger = pino({
  level: appConfig.nodeEnv === 'development' ? 'debug' : 'info',
  transport: appConfig.nodeEnv === 'development' ? {
    target: 'pino-pretty',
    options: {
      colorize: true,
      translateTime: 'SYS:standard',
      ignore: 'pid,hostname',
    },
  } : undefined,
});

export default logger;