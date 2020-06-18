import { Module } from '@nestjs/common'
import { LoggerService } from './custom.logger'

@Module({
  providers: [LoggerService],
  exports: [LoggerService],
})
export class LoggerModule {}
