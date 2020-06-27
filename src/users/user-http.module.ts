import { Module } from '@nestjs/common'
import { UserModule } from './user.module'
import { UserService } from './user.service'
import { UserController } from './user.controller'
import { ConfigService } from '@nestjs/config'

@Module({
  imports: [UserModule, ConfigService],
  providers: [UserService, ConfigService],
  controllers: [UserController],
})
export class UserHttpModule {}
