import { Injectable } from '@nestjs/common'
import { LoggerService } from './logger/custom.logger'

@Injectable()
export class AppService {
  constructor(private logger: LoggerService) {
    this.logger.setContext('App Service')
  }
  getHello(): string {
    this.logger.debug('Demo logger')
    return 'Hello World!'
  }
}
