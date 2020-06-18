import { Injectable, Logger, Scope } from '@nestjs/common'

@Injectable({ scope: Scope.TRANSIENT })
export class LoggerService extends Logger {
  error(message: any, trace?: string, context?: string) {
    // TO DO
    super.error(message, trace, context)
  }

  warn(message: any, context?: string) {
    // TO DO
    super.warn(message, context)
  }

  log(message: any, context?: string) {
    // TO DO
    super.log(message, context)
  }

  debug(message: any, context?: string) {
    // TO DO
    super.debug(message, context)
  }

  verbose(message: any, context?: string) {
    // TO DO
    super.verbose(message, context)
  }
}
