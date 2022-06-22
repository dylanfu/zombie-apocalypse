import winston from 'winston'

const logger = winston.createLogger({
  transports: [new winston.transports.Console()],
  silent: process.env.NODE_ENV === 'test' ? true : false,
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'DD-MM-YY HH:mm:ss'
    }),
    winston.format.printf(
      (info) =>
        `${info.level.toLocaleUpperCase()}: ${[info.timestamp]}: ${
          info.message
        }`
    )
  )
})

export default logger
