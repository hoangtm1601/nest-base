import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule, ConfigService } from '@nestjs/config'

import { APP_FILTER } from '@nestjs/core'
import { AllExceptionFilter} from './filter/exception.filter'

import appConfig from './config/app'
import databaseConfig from './config/database'
import { LoggerModule } from './logger/logger.module'

import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from './users/user.entity'
import { UserHttpModule } from './users/user-http.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [
        appConfig,
        databaseConfig,
      ]
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: databaseConfig().database_host,
      port: databaseConfig().database_port,
      username: databaseConfig().database_username,
      password: databaseConfig().database_password,
      database: databaseConfig().database,
      entities: [
        User,
      ],
    }),
    LoggerModule,
    UserHttpModule,
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
