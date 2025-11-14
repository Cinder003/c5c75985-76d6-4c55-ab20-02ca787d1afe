import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import appConfig from './config/app.config';
import todoRoutes from './routes/todo.routes';
import logger from './utils/logger';

const app: Express = express();

// Middleware
app.use(cors({ origin: appConfig.corsOrigin }));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rate Limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);

// Routes
app.get('/', (req: Request, res: Response) => {
  res.send('API is running...');
});

app.use('/api/todos', todoRoutes);

// Global error handler (simple version)
app.use((err: Error, req: Request, res: Response, next: Function) => {
  logger.error(err.stack);
  res.status(500).send('Something broke!');
});

export default app;