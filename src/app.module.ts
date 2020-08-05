import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { APP_FILTER } from '@nestjs/core'
import { AllExceptionFilter} from './filter/exception.filter'

import appConfig from '@config/app.config'
import databaseConfig from '@config/database.config'
import authConfig from '@config/auth.config'
import { LoggerModule } from './logger/logger.module'

import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from './users/user.entity'
import { UserHttpModule } from './users/user-http.module'
import { AuthModule } from './auth/auth.module';
import { ValidatorModule } from "@validators/validator.module"

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [
        appConfig,
        databaseConfig,
        authConfig,
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
    AuthModule,
    ValidatorModule,
  ],
  controllers: [
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionFilter,
    },
  ],
})
export class AppModule {}
