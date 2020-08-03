import { Injectable, UnauthorizedException } from '@nestjs/common'
import { UserService } from '../users/user.service'
import { User } from '../users/user.entity'
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.userService.findByEmail(email)
    if (!user) {
      throw new UnauthorizedException()
    }
    if (!bcrypt.compareSync(password, user.password)) {
      throw new UnauthorizedException()
    }
    return user
  }

  async login(user: User) {
    const payload = {
      email: user.email,
      sub: user.id
    }

    return {
      access_token: this.jwtService.sign(payload)
    }
  }
}
