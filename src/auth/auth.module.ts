import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserHttpModule } from '../users/user-http.module'
import { PassportModule } from '@nestjs/passport'
import { LocalStrategy } from './strategies/local.strategy'
import { JwtModule } from '@nestjs/jwt'
import authConfig from '@config/auth.config'
import { JwtStrategy } from './strategies/jwt.strategy'

@Module({
  imports: [
    UserHttpModule,
    PassportModule,
    JwtModule.register({
      secret: authConfig().jwtSecretKey,
      signOptions: {
        expiresIn: authConfig().jwtExpiresIn
      }
    })
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
