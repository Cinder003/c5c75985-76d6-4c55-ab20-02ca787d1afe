import app from './app';
import appConfig from './config/app.config';
import logger from './utils/logger';

const port = appConfig.port;

app.listen(port, () => {
  logger.info(`Server is running on port ${port}`);
});