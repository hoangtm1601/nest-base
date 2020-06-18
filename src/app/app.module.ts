import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'

import { APP_FILTER } from '@nestjs/core'
import { AllExceptionFilter} from '../filter/exception.filter'

import appConfig from '../config/app'
import databaseConfig from '../config/database'
import { LoggerModule } from '../logger/logger.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [
        appConfig,
        databaseConfig,
      ]
    }),
    LoggerModule,
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: AllExceptionFilter,
    },
  ],
})
export class AppModule {
}
