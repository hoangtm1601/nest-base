import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common'
import { plainToClass } from 'class-transformer'
import { User } from '../users/user.entity'
import { LocalAuthGuard } from './guards/local-auth.guard'
import { AuthService } from './auth.service'
import { JwtAuthGuard } from './guards/jwt-auth.guard'
import { UserService } from '../users/user.service'

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() request) {
    return this.authService.login(request.user)
  }

  @UseGuards(JwtAuthGuard)
  @Get('/me')
  async myProfile(@Request() request): Promise<any> {
    const payload = request.user
    const user = await this.userService.findById(payload.userId)

    return {
      ...plainToClass(User, user),
      payload
    }
  }
 }
