import dotenv from 'dotenv';
import * as Sentry from '@sentry/node';

import { logger } from './utils/logger';

// Init Sentry & Capture Global Error
Sentry.init({ dsn: process.env.SENTRY });
// app.on('error', (err, ctx) => {
//     Sentry.withScope((scope) => {
//         scope.addEventProcessor((event) => Sentry.Handlers.parseRequest(event, ctx.request));
//         Sentry.captureException(err);
//     });
// });

logger.info('Application running...');
