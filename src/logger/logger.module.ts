import { Global, Module } from '@nestjs/common'
import { LoggerService } from './custom.logger'

@Global()
@Module({
  providers: [LoggerService],
  exports: [LoggerService],
})
export class LoggerModule {
}
