import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { LoggerService } from '../logger/custom.logger'

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
  constructor(private logger: LoggerService) {
  }
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const status = exception instanceof HttpException ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    this.logger.error(exception.toString())

    response.status(status).json({
      statusCode: status,
      occurAt: new Date().toISOString(),
      path: request.url,
    });
  }
}
