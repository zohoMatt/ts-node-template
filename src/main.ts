import dotenv from 'dotenv';
import * as Sentry from '@sentry/node';

import { logger } from './utils/logger';

// Init Sentry & Capture Global Error
Sentry.init({ dsn: process.env.SENTRY });

logger.info('Application running...');
