import { User } from './user.entity'
import { UserRepository } from './user.repository'
import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { EntityId } from 'typeorm/repository/EntityId'
import { DeleteResult } from 'typeorm'

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find()
  }

  findById(id: EntityId): Promise<User> {
    return this.userRepository.findOne(id)
  }

  store(createUserDto: CreateUserDto): Promise<User> {
    return this.userRepository.save(createUserDto)
  }

  remove(id: string): Promise<DeleteResult> {
    return this.userRepository.delete(id)
  }
  
  getInactiveUsers(): Promise<User[]> {
    return this.userRepository.getInactiveUsers()
  }
}
