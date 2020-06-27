import { Injectable, Logger, Scope } from '@nestjs/common'

@Injectable({ scope: Scope.TRANSIENT })
export class LoggerService extends Logger {
  error(message: string, trace?: string, context?: string): void {
    // TO DO
    super.error(message, trace, context)
  }

  warn(message: string, context?: string): void {
    // TO DO
    super.warn(message, context)
  }

  log(message: string, context?: string): void {
    // TO DO
    super.log(message, context)
  }

  debug(message: string, context?: string): void {
    // TO DO
    super.debug(message, context)
  }

  verbose(message: string, context?: string): void {
    // TO DO
    super.verbose(message, context)
  }
}
