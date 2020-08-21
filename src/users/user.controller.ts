import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common'
import { User } from './user.entity'
import { UserService } from './user.service'
import { CreateUserDto } from './dto/create-user.dto'
import { EntityId } from 'typeorm/repository/EntityId'
import { plainToClass } from 'class-transformer'
import { UpdateUserDto } from './dto/update-user.dto'
import { DeleteResult } from 'typeorm/index'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'

@UseInterceptors(ClassSerializerInterceptor)
@Controller('users')
@UseGuards(JwtAuthGuard)
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @Get()
  index(): Promise<User[]> {
    return this.userService.index()
  }

  @Get('/inactive')
  getInactiveUser(): Promise<User[]> {
    return this.userService.getInactiveUsers()
  }

  @Get('/:id')
  async show(@Param('id') id: EntityId): Promise<User> {
    const user = await this.userService.findById(id)
    if (!user) {
      throw new NotFoundException()
    }

    return user
  }

  @Post()
  async create(@Body() userData: CreateUserDto): Promise<User> {
    const createdUser = await this.userService.store(userData)

    return plainToClass(User, createdUser)
  }

  @Put('/:id')
  update(@Param('id') id: EntityId, @Body() userData: UpdateUserDto): Promise<User> {
    return this.userService.update(id, userData)
  }

  @Delete('/:id')
  destroy(@Param('id') id: EntityId): Promise<DeleteResult> {
    return this.userService.delete(id)
  }
}
