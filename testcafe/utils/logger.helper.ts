/**
 * This file consists test log configuration.
 * The exported logger instance can be used across the project.
 * protractor-logger provides functionalities as logger.info, logger.error, logger.warn
 * Logs will be saved with current date format in TEST_REPORT_DIRECTORY/logs folder
 */
import { configure, getLogger, Logger } from 'log4js';

configure({
  appenders: {
    console: { type: 'console' },
    file: {
      type: 'file',
      filename: `${process.cwd()}/reports/logs/test_${new Date()
        .toISOString()
        .replace(/\W/g, '')}.log`,
    },
  },
  categories: {
    default: {
      appenders: ['console', 'file'],
      level: 'all',
    },
  },
});
export const logger: Logger = getLogger('log');
