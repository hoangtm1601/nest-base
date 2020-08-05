import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserRepository } from './user.repository'
import { UserSubscriber } from './subscriber/user.subscriber'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserRepository,
    ]),
  ],
  providers: [UserSubscriber],
  exports: [
    TypeOrmModule,
  ],
})
export class UserModule {
}
