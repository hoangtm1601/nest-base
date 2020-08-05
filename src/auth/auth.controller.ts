import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common'
import { plainToClass } from 'class-transformer'
import { User } from '../users/user.entity'
import { LocalAuthGuard } from './guards/local-auth.guard'
import { AuthService } from './auth.service'
import { JwtAuthGuard } from './guards/jwt-auth.guard'
import { UserService } from '../users/user.service'
import { AuthUser } from '../decorators/auth.user.decorator'

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {
  }

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  login(@Request() request): Promise<{ accessToken: string }> {
    return this.authService.generateJwtToken(request.user)
  }

  @UseGuards(JwtAuthGuard)
  @Get('/me')
  async myProfile(@Request() request, @AuthUser() authUser): Promise<any> {
    const user = await this.userService.findById(authUser.sub)

    return {
      ...plainToClass(User, user),
      authUser,
    }
  }
}
