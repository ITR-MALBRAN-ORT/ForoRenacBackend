/* eslint-disable new-cap */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
// eslint-disable-next-line import/no-import-module-exports
/* import { createLogger, format, transports } from 'winston';
import config from 'config';
import moment from 'moment-timezone';
// import stream from 'stream';
import split from 'split';

export interface Info {
  timestamp: Date;
  level: string;
  message: string;
}

const { combine, colorize, simple, splat, printf } = format;
const appendTimestamp = format((info: any, opts: any) => {
  if (opts.tz) info.timestamp = moment().tz(opts.tz).format();
  return info;
});

const outcomeFormat = printf(({ timestamp, level, message, stack }) => {
  return `${timestamp} - ${level}: ${message}. Stack description: ${
    stack ? JSON.stringify(stack) : ''
  }`;
});

const logger = createLogger({
  level: config.get('logger.level'),
  format: combine(appendTimestamp({ tz: config.get('logger.tz') }), simple()),
  transports: [
    new transports.File({
      filename: config.get('logger.filename'),
      handleExceptions: true,
      // json: true,
      maxsize: 5242880, // 5MB
      maxFiles: 5,
      tailable: true,
    }),
  ],
  exitOnError: false,
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new transports.Console({
      handleExceptions: true,
      format: combine(colorize(), splat(), outcomeFormat),
    }),
  );
}

 logger.stream = split().on('data', (message: string) => {
  logger.info(message);
});

const stream = {
  write: (message) => {
    logger.info(message);
  },
};

export default stream;
 */
