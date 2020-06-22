import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  ForbiddenException,
  Get,
  Post,
  Query,
  UseInterceptors,
} from '@nestjs/common'
import { User } from './user.entity'
import { UserService } from './user.service'
import { CreateUserDto } from './dto/create-user.dto'

@UseInterceptors(ClassSerializerInterceptor)
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  index(): Promise<User[]> {
    return this.userService.findAll()
  }

  @Get('/:id')
  show(@Query('id') id): Promise<User> {
    return this.userService.findById(id)
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<boolean> {
    await this.userService.store(createUserDto)
    return true
  }
}
