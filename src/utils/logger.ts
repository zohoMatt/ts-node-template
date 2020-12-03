import winston from 'winston';
import { Loggly } from 'winston-loggly-bulk';

const token = process.env.LOG_TOKEN;
const { combine, colorize, splat, timestamp: time, printf } = winston.format;

const customFormat = printf(({ level, message, timestamp, ...metadata }) => {
    let msg = `${timestamp} [${level}] : ${message} `;
    if (Object.keys(metadata).length > 0) {
        msg += JSON.stringify(metadata);
    }
    return msg;
});

const consoleLogger = winston.createLogger({
    format: combine(colorize(), splat(), time(), customFormat),
    transports: [new winston.transports.Console()],
});

const logglyLogger = token
    ? winston.createLogger({
          transports: [
              new Loggly({
                  token: token || '',
                  subdomain: 'lumber',
                  tags: ['lumber-service'],
                  json: true,
              }),
          ],
      })
    : consoleLogger;

export const logger = token ? logglyLogger : consoleLogger;
