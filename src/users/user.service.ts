import { InjectRepository } from '@nestjs/typeorm'
import { User } from './user.entity'
import { Repository } from 'typeorm'
import { UserRepository } from './user.repository'
import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'

@Injectable()
export class UserService {
  constructor(
    private userRepository: UserRepository
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find()
  }

  findById(id: string): Promise<User> {
    return this.userRepository.findOne(id)
  }

  store(createUserDto: CreateUserDto): Promise<User> {
    return this.userRepository.save(createUserDto)
  }

  async remove(id: string): Promise<void> {
    await this.userRepository.delete(id)
  }
}
