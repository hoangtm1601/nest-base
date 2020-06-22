import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common'
import { LoggerService } from '../logger/custom.logger'
import any = jasmine.any

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
  constructor(private logger: LoggerService) {
  }

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse()
    const request = ctx.getRequest()
    let message: string | Object = 'Internal Server Error'
    const status = exception instanceof HttpException ? exception.getStatus()
      : HttpStatus.INTERNAL_SERVER_ERROR

    if (exception instanceof HttpException) {
      message = exception.getResponse()
    } else if (exception instanceof Error) {
      message = exception.stack.toString()
    }

    this.logger.error(message)

    response.status(status).json({
      statusCode: status,
      occurAt: new Date().toISOString(),
      path: request.url,
    })
  }
}
